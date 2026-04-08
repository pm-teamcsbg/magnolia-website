MAGNOLIA BY THE SEA - VACATION RENTAL WEBSITE
Production-Ready Website with Booking System
Updated: April 7, 2026

SITE STRUCTURE
==============
index.html .............. Main landing page with booking form
photos.html ............. Full photo gallery (92 photos) with filters
reviews.html ............ Guest reviews page
logo-white.png .......... White logo for nav
logo-hero.png ........... Large hero logo
logo-gray.png ........... Gray logo variant
photos/ ................. Original + gallery photos
  gallery/thumbs/ ....... 92 compressed thumbnails (~38KB each)
  gallery/full/ ......... 92 full-size photos (~350KB each)
netlify/ ................ Netlify deployment config
  functions/ ............ Serverless functions
    get-availability.js . iCal proxy for OwnerRez calendar
netlify.toml ............ Netlify build config

DEPLOYMENT TO NETLIFY
=====================
1. Push this entire magnolia-website/ folder to a GitHub repo
2. Connect the repo to Netlify (netlify.com > Add New Site > Import from Git)
3. Build settings should auto-detect from netlify.toml:
   - Publish directory: .
   - Functions directory: netlify/functions

SET UP EMAIL NOTIFICATIONS (IMPORTANT)
======================================
After deploying to Netlify, you need to configure where booking inquiries are emailed:

1. Go to your Netlify site dashboard
2. Navigate to: Forms > booking-inquiry
3. Click "Form notifications" > "Add notification" > "Email notification"
4. Add BOTH email addresses:
   - mcmpropertyholdings@gmail.com
   - tom@fldvr.com
5. Customize the email subject line (e.g., "New Booking Inquiry - Magnolia By The Sea")
6. Save

All form submissions are also stored in the Netlify dashboard under Forms,
so you'll never lose an inquiry even if email delivery is delayed.

Free tier: 100 form submissions/month. More than enough for a vacation rental.

FEATURES
========
Landing Page (index.html):
  - Navy nav bar with centered links that slide right when logo appears on scroll
  - Full-bleed hero with logo and stats
  - Photo gallery preview (6 photos) linking to full gallery
  - 8 feature cards (pool, dock, kayaks, golf cart, rooftop, Tesla, WiFi, Nespresso)
  - 4 bedroom cards with descriptions
  - Outdoor living section with parallax background
  - Golf cart & beach section
  - Interactive 6-month calendar synced with OwnerRez iCal feed
  - Booking inquiry form with date selection, guest info, and Netlify Forms submission
  - Location & distance guide
  - 7 guest reviews with link to full reviews page
  - Lightbox photo viewer on: gallery preview, all bedroom cards, outdoor section,
    golf cart/beach section, and feature cards (pool, dock, rooftop, kitchen, golf cart)

Photo Gallery (photos.html):
  - All 92 property photos
  - 13 filter categories (All, Exterior, Pool, Living, Kitchen, Bedrooms,
    Bathrooms, Rooftop, Dock, Beach, Golf Cart, Neighborhood, Floor Plans)
  - Animated filtering with smooth transitions
  - Full lightbox with keyboard nav, swipe on mobile, photo counter
  - URL hash filtering support (e.g., photos.html#pool)
  - Sticky filter bar

Booking Form:
  - Interactive calendar with 6 months of dates
  - Real-time availability from OwnerRez iCal feed (via Netlify Function)
  - Booked dates are grayed out and unselectable
  - Date range selection with visual highlighting
  - Validates that no booked dates fall within selected range
  - Fields: dates, name, email, phone, guest count, children, trip purpose,
    special requests, referral source
  - Spam protection via honeypot field
  - Success confirmation on submit
  - Submits to Netlify Forms (emails + dashboard storage)

BOOKING FORM FIELDS
===================
Required: Check-in date, Check-out date, First name, Last name, Email, Phone, Guests
Optional: Children count, Trip purpose, Special requests, Referral source

Booking Rules Displayed:
  - Check-in: 4:00 PM
  - Check-out: 10:00 AM
  - Max guests: 10
  - Primary renter must be 21+

PROPERTY DETAILS
================
Registration: BTR# 2302
Manager: Florida Dreamscape Vacation Rentals
Contact: Tom@Fldvr.com | (727) 254-2022
Location: Indian Rocks Beach, Florida
Capacity: 4 bedrooms, 3 bathrooms, sleeps 10
Airbnb: https://airbnb.com/h/magnolia-by-the-sea
Website: https://magnoliabythesea.com

RESPONSIVE DESIGN
=================
Mobile Breakpoints:
  - 480px: Single column layouts, adjusted font sizes
  - 768px: 2-column grids, condensed nav, stacked date chips
  - 1024px+: Full multi-column layouts

BROWSER COMPATIBILITY
=====================
  - Modern browsers (Chrome, Firefox, Safari, Edge)
  - iOS 12+, Android 6+
  - Requires JavaScript for calendar, lightbox, and form features
