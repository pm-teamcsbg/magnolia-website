MAGNOLIA BY THE SEA - VACATION RENTAL WEBSITE
Production-Ready Website with Booking System
Updated: April 7, 2026

SITE STRUCTURE
==============
index.html .............. Main landing page with the OwnerRez booking widget
thank-you.html .......... Page guests see after they finish booking
photos.html ............. Full photo gallery (92 photos) with filters
reviews.html ............ Guest reviews page
logo-white.png .......... White logo for nav
logo-hero.png ........... Large hero logo
logo-gray.png ........... Gray logo variant
photos/ ................. Original + gallery photos
  gallery/thumbs/ ....... 92 compressed thumbnails (~38KB each)
  gallery/full/ ......... 92 full-size photos (~350KB each)
netlify.toml ............ Netlify build config

DEPLOYMENT TO NETLIFY
=====================
1. Push this entire magnolia-website/ folder to a GitHub repo
2. Connect the repo to Netlify (netlify.com > Add New Site > Import from Git)
3. Build settings should auto-detect from netlify.toml:
   - Publish directory: .

BOOKING
=======
Guests book on the homepage through the OwnerRez booking widget. Florida Dreamscape
Vacation Rentals handles the reservation and the confirmation email. The old
availability calendar, inquiry form, and iCal function have been removed.

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
  - OwnerRez booking widget (instant booking through Florida Dreamscape)
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

Booking:
  - OwnerRez booking widget on the homepage
  - Links with ?offer=CODE prefill that code in the widget
  - After booking, guests land on /thank-you

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
  - 768px: 2-column grids, condensed nav
  - 1024px+: Full multi-column layouts

BROWSER COMPATIBILITY
=====================
  - Modern browsers (Chrome, Firefox, Safari, Edge)
  - iOS 12+, Android 6+
  - Requires JavaScript for the booking widget and the photo lightbox
