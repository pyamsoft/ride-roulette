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

import { Attraction } from "../pages/roulette/model/Attraction";
import { newLogger } from "../logger/Logger";
import { DisneylandInteractor } from "../pages/roulette/arch/DisneylandInteractor";

const logger = newLogger("AppViewModel");

export interface AppViewModel {
  objectType: "AppViewModel";

  handleFinishSplashScreen: (setShowSplash: (show: boolean) => void) => void;

  handleLoadAttractions: (
    setLoading: (loading: boolean) => void,
    setAttractions: (attractions: ReadonlyArray<Attraction>) => void,
    setAttractionError: (err: Error | undefined) => void,
  ) => void;
}

export const createAppViewModel = function (
  disneyland: DisneylandInteractor,
  date: Date,
): AppViewModel {
  return {
    objectType: "AppViewModel",

    handleFinishSplashScreen: (setShowSplash) => {
      setShowSplash(false);
    },

    handleLoadAttractions: (setLoading, setAttractions, setAttractionError) => {
      setLoading(true);
      Promise.resolve().then(async () => {
        try {
          const attractions = await disneyland.getAttractions({ date });
          setAttractions(attractions);
          setAttractionError(undefined);
        } catch (e) {
          logger.e(e, "Error loading park attractions");
          setAttractions([]);
          setAttractionError(e as Error);
        } finally {
          setLoading(false);
        }
      });
    },
  };
};
