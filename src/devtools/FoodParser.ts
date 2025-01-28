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

// Compile this file with tsc and run the JS result with node

enum Food {
  DISNEYLAND = "disneyland",
  CALIFORNIA_ADVENTURE = "california_adventure",
  DOWNTOWN_DISNEY = "downtown_disney",
}

interface F {
  id: string;
  url: string;
  name: string;
  imageUrl: string;
  park: Food;
}

const diningString = function (r: F): string {
  // Fix its a small world
  const name = r.name.replace(/"/g, '\\"');

  switch (r.park) {
    case Food.CALIFORNIA_ADVENTURE:
      return `createDCANewDining({ id: "${r.id}", name: "${name}", url: "${r.url}", imageUrl: "${r.imageUrl}" })`;
    case Food.DISNEYLAND:
      return `createDLRNewDining({ id: "${r.id}", name: "${name}", url: "${r.url}", imageUrl: "${r.imageUrl}" })`;
    case Food.DOWNTOWN_DISNEY:
      return `createDTDNewDining({ id: "${r.id}", name: "${name}", url: "${r.url}", imageUrl: "${r.imageUrl}" })`;
    default:
      throw new Error(`invalid park: ${r}`);
  }
};

// noinspection JSUnusedGlobalSymbols
/**
 * Copy the /attractions JSON response.results into a file and then pass the string
 * content to this function. It will spit out rides
 * @param diningJson
 */
module.exports = {
  TEST_PARSE_DINING_JSON: function (diningJson: string) {
    const j = JSON.parse(diningJson);
    const dining: F[] = j.results.map(
      (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        d: any,
      ) => {
        return {
          id: d.id,
          url: d.urlFriendlyId,
          name: d.name,
          imageUrl: d.media ? d.media.finderStandardThumb.url : "",
          park:
            d.locationName === "Disneyland Park"
              ? Food.DISNEYLAND
              : d.locationName === "Disney California Adventure Park"
                ? Food.CALIFORNIA_ADVENTURE
                : Food.DOWNTOWN_DISNEY,
        };
      },
    );

    console.log(
      `${dining.filter((d) => d.park === Food.DISNEYLAND).map(diningString)}`,
    );

    console.log(
      `${dining
        .filter((d) => d.park === Food.CALIFORNIA_ADVENTURE)
        .map(diningString)}`,
    );

    console.log(
      `${dining
        .filter((d) => d.park === Food.DOWNTOWN_DISNEY)
        .map(diningString)}`,
    );
  },
};
