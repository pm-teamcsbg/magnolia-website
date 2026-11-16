#!/usr/bin/env bash
# Submit site URLs to IndexNow (Bing, Yandex, etc.) on each Netlify deploy.
# Never fails the build.
echo "IndexNow: submitting URLs..."
STATUS=$(curl -s -o /dev/null -w "%{http_code}" --max-time 15 \
  -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{
  "host": "magnoliabythesea.com",
  "key": "1550036c0bfffc6348210ecd2094b826",
  "keyLocation": "https://magnoliabythesea.com/1550036c0bfffc6348210ecd2094b826.txt",
  "urlList": [
    "https://magnoliabythesea.com/",
    "https://magnoliabythesea.com/photos.html",
    "https://magnoliabythesea.com/reviews.html",
    "https://magnoliabythesea.com/guide.html",
    "https://magnoliabythesea.com/offers.html"
  ]
}') || true
echo "IndexNow HTTP status: ${STATUS:-none}"
exit 0
