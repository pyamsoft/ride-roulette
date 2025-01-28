/*
 * Copyright 2025 pyamsoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AppEnvironment } from "../environment";

export interface Logger {
  objectType: "Logger";

  d: (...args: unknown[]) => void;

  w: (...args: unknown[]) => void;

  e: (...args: unknown[]) => void;
}

export const newLogger = function (tag: string): Logger {
  const appTag = `[${AppEnvironment.APP_NAME}:${AppEnvironment.APP_VERSION}]`;
  const myTag = `(${tag})`;
  return {
    objectType: "Logger",

    d: function (...args: unknown[]) {
      if (AppEnvironment.IS_DEV) {
        console.log(appTag, myTag, ...args);
      }
    },

    w: function (...args: unknown[]) {
      if (AppEnvironment.IS_DEV) {
        console.warn(appTag, myTag, ...args);
      }
    },

    e: function (err: unknown, ...args: unknown[]) {
      if (AppEnvironment.IS_DEV) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const e = err as any;
        if (e.code && e.stack && e.name === "AxiosError") {
          const { stack, ...rest } = e;
          console.error(appTag, myTag, stack, ...args, rest);
        } else {
          console.error(appTag, myTag, e, ...args);
        }
      }
    },
  };
};
