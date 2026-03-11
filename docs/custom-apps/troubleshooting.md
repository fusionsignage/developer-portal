---
sidebar_position: 7
description: What to do when things go wrong.
---

# Troubleshooting

## Supporting old browsers

Unfortunately, many signage devices run ancient versions of browsers. You need to ensure that your custom app's 
JavaScript and CSS code is supported by the device you plan to deploy your content on.

### Techniques for supporting old browsers

1. Use [Babeljs.io](https://babeljs.io/) to compile your code to target older browsers.
2. Use [our template](./getting-started.md), which targets an old browser version out of the box.
3. Test. Sometimes you have to run it on a real device and see what happens.

### Minimum browser versions per device

| Device           | Minimum browser version |
|------------------|-------------------------|
| Android 5        | Chromium 37             |
| Android 5.1      | Chromium 39             |
| Android 6        | Chromium 44             |
| Android 7        | Chromium 51             |
| Android 7.1      | Chromium 52             |
| Android 8        | Chromium 58             |
| Android 8.1      | Chromium 61             |
| Android 9        | Chromium 66             |
| Android 10       | Chromium 74             |
| Android 11       | Chromium 83             |
| Android 12       | Chromium 91             |
| BrightSign 7.x   | Chromium 45             |
| BrightSign 8.1.x | Chromium 69             |
| BrightSign 8.2.x | Chromium 69             |
| BrightSign 8.3.x | Chromium 69             |
| BrightSign 8.4.x | Chromium 69             |
| BrightSign 8.5.x | Chromium 87             |
| BrightSign 9.0.x | Chromium 87             |
| Tizen 3.0        | Chromium 47             |
| Tizen 4.0        | Chromium 56             |
| webOS 4.0        | Chromium 53             |
| webOS 4.1        | Chromium 53             |
| webOS 6.0        | Chromium 79             |

## Logging

Once you have deployed your custom app to a real device, it can be hard to know why things might be going wrong. The first
place you will want to look is the browser logs. 

Historically speaking, it has been hard for Fusion Signage developers themselves to get logs off devices out in the world.
We are working on building a logging library into our [SDK](../sdk/coming-soon.md) to simplify remote logging, but in the interim you
may find a tool like [Sentry](https://sentry.io/for/javascript/) to be useful for remotely investigating errors.

Be sure to transpile the Sentry library itself so that it works for your target device, as Sentry also uses fairly modern 
JavaScript features. Our [example template](./getting-started.md#start-from-a-template) will take care of this for you.

## Performance

Most signage devices are significantly less powerful than a typical desktop computer. This can manifest as choppy CSS 
animations, sluggish UI updates, or low frame rates when using APIs such as 
[requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame).

The best way to verify that your custom app performs well is to test it on a real device as early as possible and 
optimise based on what you observe.

As a quick diagnostic, you can drop the following snippet into your app to estimate its frame rate:

```js
let frameCount = 0;
let lastTime = performance.now();
const fpsLogInterval = 1000;
function loop(timestamp) {
  frameCount++;
  const elapsed = timestamp - lastTime;
  if (elapsed >= fpsLogInterval) {
    const fps = (frameCount * 1000) / elapsed;
    console.log(`FPS: ${fps.toFixed(2)}`);
    frameCount = 0;
    lastTime = timestamp;
  }
  requestAnimationFrame(loop);
}
console.log('Testing frame rate...');
requestAnimationFrame(loop);
```

This won't tell you everything about your app's performance, but it can signal that there will be rendering issues on 
lower-powered devices if your frame rate is low even on a desktop computer. If performance is poor, common fixes include 
reducing animation complexity, avoiding unnecessary DOM updates, and moving expensive work out of rendering loops.
