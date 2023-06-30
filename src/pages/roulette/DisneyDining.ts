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

import { Attraction, AttractionType } from "./model/Attraction";
import { ThemePark } from "./model/ThemePark";

const createDLRNewDining = function (data: {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
  type: AttractionType;
}): Attraction {
  const { url, ...rest } = data;
  return {
    ...rest,
    url: `/dining/disneyland/${url}`,
    objectType: "Attraction",
    park: ThemePark.DISNEYLAND,
  };
};

const createDTDNewDining = function (data: {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
  type: AttractionType;
}): Attraction {
  const { url, ...rest } = data;
  return {
    ...rest,
    url: `/dining/downtown-disney-district/${url}`,
    objectType: "Attraction",
    park: ThemePark.DOWNTOWN_DISNEY,
  };
};

const createDCANewDining = function (data: {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
  type: AttractionType;
}): Attraction {
  const { url, ...rest } = data;
  return {
    ...rest,
    url: `/dining/disney-california-adventure/${url}`,
    objectType: "Attraction",
    park: ThemePark.CALIFORNIA_ADVENTURE,
  };
};

const addDisneylandDining = function (attractions: Attraction[]): Attraction[] {
  attractions = [...attractions];
  return attractions;
};

const addDCADining = function (attractions: Attraction[]): Attraction[] {
  attractions = [...attractions];
  return attractions;
};

const addDTDDining = function (attractions: Attraction[]): Attraction[] {
  attractions = [...attractions];
  return attractions;
};

export const getHardcodedDining = async function (): Promise<Attraction[]> {
  let at: Attraction[] = [];

  at = await addDisneylandDining(at);
  at = await addDCADining(at);
  at = await addDTDDining(at);

  return at;
};
