---
sidebar_position: 3
description: Restrictions on API usage
---

# Rate Limiting

The API has a rate-limiting mechanism that allows a certain number of requests to be made within a rolling window of time.
The request quota counted by the authenticated user making the request. The quota is set to 20 requests per second.

Too many requests inside that time frame will trigger the rate-limiter which will result in all consecutive requests to fail with a [429 http error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429) response for a short period of time.

Each request will include a `x-ratelimit-remaining` header indicating the number of requests remaining in the current window.