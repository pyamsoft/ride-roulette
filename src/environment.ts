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

import { version } from "../package.json";

const DEV_URL = "TODO-GET-URL";

export const AppEnvironment = {
  objectType: "AppEnvironment",

  IS_DEBUG_MODE: process.env.NODE_ENV === "development",
  IS_TEST_MODE: process.env.NODE_ENV === "test",

  APP_NAME: "Ride Roulette",
  APP_VERSION: version,

  get IS_DEV() {
    const url = window.location.href;
    return (
      this.IS_DEBUG_MODE ||
      url.startsWith(`http://${DEV_URL}`) ||
      url.startsWith(`https://${DEV_URL}`)
    );
  },
};
