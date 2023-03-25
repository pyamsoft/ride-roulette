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

import { AppStorage } from "../arch/AppStorage";
import { v4 } from "uuid";

const createMemoryStorage = function (): Storage {
  let storage: { [key: string]: string | null } = {};
  return {
    getItem(key: string): string | null {
      return storage[key] || null;
    },
    key(index: number): string | null {
      return Object.keys(storage)[index] || null;
    },
    removeItem(key: string) {
      storage[key] = null;
    },
    setItem(key: string, value: string) {
      storage[key] = value;
    },
    clear(): void {
      storage = {};
    },

    get length(): number {
      return Object.keys(storage).length;
    },
  };
};

const getBestStorage = function () {
  try {
    return window.localStorage;
  } catch (e) {
    try {
      return window.sessionStorage;
    } catch (e) {
      return createMemoryStorage();
    }
  }
};

const KEY_SESSION_TOKEN = "ce27193e-7c90-4327-8868-d34cbd88f42f";

export const createAppStorage = function (): AppStorage {
  const storage = getBestStorage();

  return {
    objectType: "AppStorage",

    sessionToken: function (): string {
      let token = storage.getItem(KEY_SESSION_TOKEN);
      if (!token) {
        token = v4();
        storage.setItem(KEY_SESSION_TOKEN, token);
      }

      return token;
    },
  };
};
