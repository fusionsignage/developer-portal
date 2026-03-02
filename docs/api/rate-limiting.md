---
sidebar_position: 3
description: Restrictions on API usage
---

# Rate Limiting

The API has a rate-limiting mechanism that allows a certain number of requests to be made within a rolling window of time. 

Too many requests inside that time frame will trigger the rate-limiter which will result in all consecutive requests to fail with a [429 http error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429) response for a short period of time.

## Limits

The limits are TBD as of March 2026. We will update this documentation when we're ready to share them.