import test from "node:test";
import assert from "node:assert/strict";
import { detectPlatform } from "../lib/releases";

test("mobile browsers select their mobile platform before desktop-like identifiers", () => {
  assert.equal(detectPlatform({ userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)", platform: "iPhone", maxTouchPoints: 5 }), "ios");
  assert.equal(detectPlatform({ userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15", platform: "MacIntel", maxTouchPoints: 5 }), "ios");
  assert.equal(detectPlatform({ userAgent: "Mozilla/5.0 (Linux; Android 15; Pixel 9)", platform: "Linux armv8l", maxTouchPoints: 5 }), "android");
});

test("desktop platforms are detected and unknown clients are not assigned a download", () => {
  assert.equal(detectPlatform({ userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)", platform: "Win32", maxTouchPoints: 0 }), "windows");
  assert.equal(detectPlatform({ userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)", platform: "MacIntel", maxTouchPoints: 0 }), "macos");
  assert.equal(detectPlatform({ userAgent: "Mozilla/5.0 (X11; Linux x86_64)", platform: "Linux x86_64", maxTouchPoints: 0 }), "linux");
  assert.equal(detectPlatform({ userAgent: "Unknown", platform: "", maxTouchPoints: 0 }), null);
});
