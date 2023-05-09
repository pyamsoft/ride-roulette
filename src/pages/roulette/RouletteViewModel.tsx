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
import { ViewModelProps } from "../../arch/ViewModel";
import { Attraction } from "./model/Attraction";
import { ThemePark } from "./model/ThemePark";

interface Shared {
  isDark: boolean;
  onDarkModeToggled: () => void;
  attractions: Attraction[];
}

export type RouletteProps = Shared;

export interface RouletteState extends Shared {
  includeDisney: boolean;
  onToggleDisney: () => void;

  includeCA: boolean;
  onToggleCA: () => void;

  includeDTD: boolean;
  onToggleDTD: () => void;

  selectedIndex: number;
  onIndexSelected: (i: number) => void;
}

const useAttractions = function (attractions: Attraction[]) {
  const [includeDisney, setIncludeDisney] = React.useState(true);
  const [includeCA, setIncludeCA] = React.useState(true);
  const [includeDTD, setIncludeDTD] = React.useState(false);

  const handleToggleDisney = React.useCallback(() => {
    setIncludeDisney((d) => !d);
  }, [setIncludeDisney]);

  const handleToggleCA = React.useCallback(() => {
    setIncludeCA((d) => !d);
  }, [setIncludeCA]);

  const handleToggleDTD = React.useCallback(() => {
    setIncludeDTD((d) => !d);
  }, [setIncludeDTD]);

  const filteredAttractions = React.useMemo(() => {
    return attractions
      .filter((a) => {
        if (!includeCA) {
          return a.park !== ThemePark.CALIFORNIA_ADVENTURE;
        }

        return true;
      })
      .filter((a) => {
        if (!includeDisney) {
          return a.park !== ThemePark.DISNEYLAND;
        }

        return true;
      })
      .filter((a) => {
        if (!includeDTD) {
          return a.park !== ThemePark.DOWNTOWN_DISNEY;
        }

        return true;
      });
  }, [attractions, includeCA, includeDisney, includeDTD]);

  return React.useMemo(() => {
    return {
      rideList: filteredAttractions,
      includeDisney,
      includeCA,
      includeDTD,
      onToggleDisney: handleToggleDisney,
      onToggleCA: handleToggleCA,
      onToggleDTD: handleToggleDTD,
    };
  }, [
    filteredAttractions,
    includeDisney,
    includeCA,
    includeDTD,
    handleToggleDisney,
    handleToggleCA,
    handleToggleDTD,
  ]);
};

export const RouletteViewModel: React.FunctionComponent<
  ViewModelProps<RouletteProps, RouletteState>
> = function ({ children, ...props }) {
  const { isDark, onDarkModeToggled } = props;
  const { attractions } = props;

  const [finalIndex, setFinalIndex] = React.useState(-1);

  const {
    rideList,
    includeDisney,
    onToggleDisney,
    onToggleCA,
    includeCA,
    onToggleDTD,
    includeDTD,
  } = useAttractions(attractions);

  const handleToggleDisney = React.useCallback(() => {
    setFinalIndex(-1);
    onToggleDisney();
  }, [onToggleDisney, setFinalIndex]);

  const handleToggleCA = React.useCallback(() => {
    setFinalIndex(-1);
    onToggleCA();
  }, [onToggleCA, setFinalIndex]);

  const handleToggleDTD = React.useCallback(() => {
    setFinalIndex(-1);
    onToggleDTD();
  }, [onToggleDTD, setFinalIndex]);

  const state: RouletteState = React.useMemo(() => {
    return {
      isDark,
      onDarkModeToggled,

      attractions: rideList,

      includeDisney,
      includeCA,
      includeDTD,
      onToggleDisney: handleToggleDisney,
      onToggleCA: handleToggleCA,
      onToggleDTD: handleToggleDTD,

      selectedIndex: finalIndex,
      onIndexSelected: setFinalIndex,
    };
  }, [
    isDark,
    onDarkModeToggled,

    rideList,

    includeDisney,
    handleToggleDisney,
    handleToggleCA,
    includeCA,
    includeDTD,
    handleToggleDTD,

    finalIndex,
    setFinalIndex,
  ]);
  return children(state);
};
