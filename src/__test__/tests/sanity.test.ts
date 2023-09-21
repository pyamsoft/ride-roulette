import { test, expect } from "vitest";

/**
 * Is the environment sane
 */
test("sanity", () => {
  expect(2 + 2).toEqual(4);
});

/**
 * Do we have a window object
 */
test("window", () => {
  expect(window).toBeDefined();
});

/**
 * esmodule support
 */
test("esmodules", () => {
  expect(import.meta).toBeDefined();
});
