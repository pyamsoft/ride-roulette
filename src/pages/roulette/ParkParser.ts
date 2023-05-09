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

import { ThemePark } from "./model/ThemePark";

interface P {
  id: string;
  url: string;
  name: string;
  imageUrl: string;
  park: ThemePark;
}

const rideString = function (r: P): string {
  // Fix its a small world
  const name = r.name.replace(/"/g, '\\"');

  switch (r.park) {
    case ThemePark.CALIFORNIA_ADVENTURE:
      return `createCANewAttraction({ id: "${r.id}", name: "${name}", url: "${r.url}", imageUrl: "${r.imageUrl}" })`;
    case ThemePark.DISNEYLAND:
      return `createDLRNewAttraction({ id: "${r.id}", name: "${name}", url: "${r.url}", imageUrl: "${r.imageUrl}" })`;
    case ThemePark.DOWNTOWN_DISNEY:
      return `createDTDNewAttraction({ id: "${r.id}", name: "${name}", url: "${r.url}", imageUrl: "${r.imageUrl}" })`;
    default:
      throw new Error(`invalid park: ${r}`);
  }
};

// noinspection JSUnusedGlobalSymbols
/**
 * Copy the /attractions JSON response.results into a file and then pass the string
 * content to this function. It will spit out rides
 * @param rideJson
 */
export const TEST_PARSE_RIDE_JSON = function (rideJson: string) {
  const j = JSON.parse(rideJson);
  const rides: P[] = j.results.map(
    (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      r: any
    ) => {
      return {
        id: r.id,
        url: r.urlFriendlyId,
        name: r.name,
        imageUrl: r.media ? r.media.finderStandardThumb.url : "",
        park:
          r.locationName === "Disneyland Park"
            ? ThemePark.DISNEYLAND
            : r.locationName === "Disney California Adventure Park"
            ? ThemePark.CALIFORNIA_ADVENTURE
            : ThemePark.DOWNTOWN_DISNEY,
      };
    }
  );

  console.log(
    `${rides
      .filter((r) => r.park === ThemePark.DISNEYLAND)
      .map((r: P) => rideString(r))}`
  );

  console.log(
    `${rides
      .filter((r) => r.park === ThemePark.CALIFORNIA_ADVENTURE)
      .map((r: P) => rideString(r))}`
  );

  console.log(
    `${rides
      .filter((r) => r.park === ThemePark.DOWNTOWN_DISNEY)
      .map((r: P) => rideString(r))}`
  );
};
