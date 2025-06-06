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

import { DisneylandInteractor } from "./DisneylandInteractor";
import { Attraction } from "../model/Attraction";
import { getHardcodedParkData } from "../loader/DisneyAttractions";
import { getHardcodedDining } from "../loader/DisneyDining";

const shuffle = function <T>(array: T[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
};

export const createDisneylandInteractor = function (): DisneylandInteractor {
  return {
    objectType: "DisneylandInteractor",

    getAttractions: async function (data: {
      date: Date;
    }): Promise<ReadonlyArray<Attraction>> {
      // Disney blocks us, just hardcode shit.
      const { date } = data;
      const parks = await getHardcodedParkData({
        date,
      });
      const food = await getHardcodedDining();
      const all = [...parks, ...food];

      shuffle(all);
      return all;
    },
  };
};
