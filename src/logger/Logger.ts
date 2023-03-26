/*
 * Copyright 2023 pyamsoft
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

  d: (...args: any) => void;

  w: (...args: any) => void;

  e: (...args: any) => void;
}

export const newLogger = function (tag: string): Logger {
  const appTag = `[${AppEnvironment.APP_NAME}:${AppEnvironment.APP_VERSION}]`;
  const myTag = `(${tag})`;
  return {
    objectType: "Logger",

    d: function (...args: any) {
      if (AppEnvironment.IS_DEV) {
        console.log(appTag, myTag, ...args);
      }
    },

    w: function (...args: any) {
      if (AppEnvironment.IS_DEV) {
        console.warn(appTag, myTag, ...args);
      }
    },

    e: function (err: any, ...args: any) {
      if (AppEnvironment.IS_DEV) {
        if (err.code && err.stack && err.name === "AxiosError") {
          const { stack, ...rest } = err;
          console.error(appTag, myTag, stack, ...args, rest);
        } else {
          console.error(appTag, myTag, err, ...args);
        }
      }
    },
  };
};
