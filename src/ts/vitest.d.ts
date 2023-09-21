export * from "vitest";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface CustomMatchers<R = unknown> {}

declare module "vitest" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Assertion<T = any> extends CustomMatchers<T> {}

  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

export {};
