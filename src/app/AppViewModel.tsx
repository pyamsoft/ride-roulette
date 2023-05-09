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

import React from "react";
import { ObjectGraph } from "../arch/ObjectGraph";
import { AppStorage } from "../arch/AppStorage";
import { ViewModelProps } from "../arch/ViewModel";
import { newLogger } from "../logger/Logger";
import { Attraction } from "../pages/roulette/model/Attraction";

const logger = newLogger("AppViewModel");

interface Shared {
  graph: ObjectGraph;
  storage: AppStorage;
}

export type AppProps = Shared

export interface AppState extends Shared {
  // splash
  splash: boolean;
  onFinishSplash: () => void;

  // roulette
  attractions: Attraction[];
  attractionsError: Error | undefined;
}

const useSplash = function () {
  const [splash, setSplash] = React.useState(true);

  const handleFinishSplash = React.useCallback(() => {
    setSplash(false);
  }, [setSplash]);

  return {
    splash,
    onFinishSplash: handleFinishSplash,
  };
};

const useParks = function (graph: ObjectGraph) {
  const { interactors } = graph;
  const { disneyland } = interactors;

  const [attractions, setAttractions] = React.useState<Attraction[]>([]);
  const [attractionsError, setAttractionsError] = React.useState<
    Error | undefined
  >(undefined);

  React.useEffect(() => {
    Promise.resolve().then(async () => {
      try {
        const res = await disneyland.getAttractions({ date: new Date() });
        logger.d("DISNEY: ", res);
        setAttractions(res);
        setAttractionsError(undefined);
      } catch (e) {
        logger.e(e, "Error loading Disneyland attractions");
        setAttractions([]);
        setAttractionsError(e as Error);
      }
    });
  }, [disneyland, setAttractions, setAttractionsError]);

  return React.useMemo(() => {
    return {
      attractions,
      attractionsError,
    };
  }, [attractions, attractionsError]);
};

export const AppViewModel: React.FunctionComponent<
  ViewModelProps<AppProps, AppState>
> = function ({ children, ...props }) {
  const { graph, storage } = props;

  const { attractionsError, attractions } = useParks(graph);
  const { splash, onFinishSplash } = useSplash();

  const state: AppState = React.useMemo(() => {
    return {
      graph,
      storage,

      // State

      // rides
      attractions,
      attractionsError,

      // Splash
      splash,
      onFinishSplash,
    };
  }, [
    graph,
    storage,

    // State

    // rides
    attractions,
    attractionsError,

    // Splash
    splash,
    onFinishSplash,
  ]);

  return children(state);
};
