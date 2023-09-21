import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Clean up matchers, clear jsdom
afterEach(() => {
  cleanup();
});
