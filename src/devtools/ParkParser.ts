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

// Compile this file with tsc and run the JS result with node

enum Park {
  DISNEYLAND = "disneyland",
  CALIFORNIA_ADVENTURE = "california_adventure",
  DOWNTOWN_DISNEY = "downtown_disney",
}

interface P {
  id: string;
  url: string;
  name: string;
  imageUrl: string;
  park: Park;
}

const rideString = function (r: P): string {
  // Fix its a small world
  const name = r.name.replace(/"/g, '\\"');

  switch (r.park) {
    case Park.CALIFORNIA_ADVENTURE:
      return `createDCANewAttraction({ id: "${r.id}", name: "${name}", url: "${r.url}", imageUrl: "${r.imageUrl}" })`;
    case Park.DISNEYLAND:
      return `createDLRNewAttraction({ id: "${r.id}", name: "${name}", url: "${r.url}", imageUrl: "${r.imageUrl}" })`;
    case Park.DOWNTOWN_DISNEY:
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
module.exports = {
  TEST_PARSE_RIDE_JSON: function (rideJson: string) {
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
              ? Park.DISNEYLAND
              : r.locationName === "Disney California Adventure Park"
              ? Park.CALIFORNIA_ADVENTURE
              : Park.DOWNTOWN_DISNEY,
        };
      }
    );

    console.log(
      `${rides.filter((r) => r.park === Park.DISNEYLAND).map(rideString)}`
    );

    console.log(
      `${rides
        .filter((r) => r.park === Park.CALIFORNIA_ADVENTURE)
        .map(rideString)}`
    );

    console.log(
      `${rides.filter((r) => r.park === Park.DOWNTOWN_DISNEY).map(rideString)}`
    );
  },
};
