// Netlify Function: Fetches OwnerRez iCal feed and returns booked date ranges as JSON
// This avoids CORS issues when fetching the iCal from the browser

const https = require('https');

const ICAL_URL = 'https://app.ownerrez.com/feeds/ical/1da1d323398b4cc8adc946d8bae9d213';

function fetchICal(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            // Follow redirects
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return fetchICal(res.headers.location).then(resolve).catch(reject);
            }
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        }).on('error', reject);
    });
}

function parseICal(icalData) {
    const events = [];
    const eventBlocks = icalData.split('BEGIN:VEVENT');

    for (let i = 1; i < eventBlocks.length; i++) {
        const block = eventBlocks[i].split('END:VEVENT')[0];

        const dtstart = block.match(/DTSTART[^:]*:(\d{8})/);
        const dtend = block.match(/DTEND[^:]*:(\d{8})/);
        const summary = block.match(/SUMMARY:(.*)/);

        if (dtstart && dtend) {
            const startStr = dtstart[1];
            const endStr = dtend[1];

            events.push({
                start: `${startStr.slice(0,4)}-${startStr.slice(4,6)}-${startStr.slice(6,8)}`,
                end: `${endStr.slice(0,4)}-${endStr.slice(4,6)}-${endStr.slice(6,8)}`,
                summary: summary ? summary[1].trim() : 'Booked'
            });
        }
    }

    return events;
}

// Expand events into booked dates and turnover dates
// Turnover days = check-in dates where a previous guest can still check out that morning
function getBookedDates(events) {
    const booked = new Set();
    const checkinDates = new Set();

    for (const event of events) {
        checkinDates.add(event.start);
        const start = new Date(event.start + 'T00:00:00');
        const end = new Date(event.end + 'T00:00:00');
        let current = new Date(start);
        while (current < end) {
            const dateStr = current.toISOString().split('T')[0];
            booked.add(dateStr);
            current.setDate(current.getDate() + 1);
        }
    }

    // Turnover days: dates that are a check-in for one booking.
    // These are available for checkout but not for new check-ins.
    const turnoverDates = Array.from(checkinDates).sort();

    return {
        allDates: Array.from(booked).sort(),
        turnoverDates
    };
}

exports.handler = async function(event, context) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
    };

    try {
        const icalData = await fetchICal(ICAL_URL);
        const events = parseICal(icalData);
        const result = getBookedDates(events);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                bookedDates: result.allDates,
                turnoverDates: result.turnoverDates,
                events,
                lastUpdated: new Date().toISOString()
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Failed to fetch availability data' })
        };
    }
};
