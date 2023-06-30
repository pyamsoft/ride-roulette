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

import React, { Dispatch } from "react";
import { ViewModelProps } from "../../arch/ViewModel";
import { Attraction, AttractionType } from "./model/Attraction";
import { ThemePark } from "./model/ThemePark";

interface Shared {
  isDark: boolean;
  onDarkModeToggled: () => void;
  attractions: Attraction[];
}

export type RouletteProps = Shared;

export interface RouletteState extends Shared {
  selectedIndex: number;
  onIndexSelected: (i: number) => void;

  parkIncludeDisney: boolean;
  onToggleParkIncludeDisney: () => void;

  parkIncludeDCA: boolean;
  onToggleParkIncludeDCA: () => void;

  parkIncludeDTD: boolean;
  onToggleParkIncludeDTD: () => void;

  typeIncludeRides: boolean;
  onToggleTypeIncludeRides: () => void;

  typeIncludeShows: boolean;
  onToggleTypeIncludeShows: () => void;

  typeIncludeMeetGreet: boolean;
  onToggleTypeIncludeMeetGreet: () => void;

  typeIncludeQuickEat: boolean;
  onToggleTypeIncludeQuickEat: () => void;

  typeIncludeSitEat: boolean;
  onToggleTypeIncludeSitEat: () => void;
}

const useToggle = function (callback: Dispatch<React.SetStateAction<boolean>>) {
  return React.useCallback(() => {
    callback((d) => !d);
  }, [callback]);
};

const useSelectors = function () {
  const [parkIncludeDisney, setParkIncludeDisney] = React.useState(true);
  const [parkIncludeDCA, setParkIncludeDCA] = React.useState(true);
  const [parkIncludeDTD, setParkIncludeDTD] = React.useState(false);

  const [typeIncludeRides, setTypeIncludeRides] = React.useState(true);
  const [typeIncludeShows, setTypeIncludeShows] = React.useState(false);
  const [typeIncludeMeetGreet, setTypeIncludeMeetGreet] = React.useState(false);
  const [typeIncludeQuickEat, setTypeIncludeQuickEat] = React.useState(false);
  const [typeIncludeSitEat, setTypeIncludeSitEat] = React.useState(false);

  const handleToggleParkDisney = useToggle(setParkIncludeDisney);
  const handleToggleParkCA = useToggle(setParkIncludeDCA);
  const handleToggleParkDTD = useToggle(setParkIncludeDTD);

  const handleToggleTypeRides = useToggle(setTypeIncludeRides);
  const handleToggleTypeShows = useToggle(setTypeIncludeShows);
  const handleToggleTypeMeetGreet = useToggle(setTypeIncludeMeetGreet);
  const handleToggleTypeQuickEat = useToggle(setTypeIncludeQuickEat);
  const handleToggleTypeSitEat = useToggle(setTypeIncludeSitEat);

  return React.useMemo(() => {
    return {
      parkIncludeDisney: parkIncludeDisney,
      onToggleParkDisney: handleToggleParkDisney,

      parkIncludeDCA: parkIncludeDCA,
      onToggleParkDCA: handleToggleParkCA,

      parkIncludeDTD: parkIncludeDTD,
      onToggleParkDTD: handleToggleParkDTD,

      typeIncludeRides: typeIncludeRides,
      onToggleTypeRides: handleToggleTypeRides,

      typeIncludeShows,
      onToggleTypeShows: handleToggleTypeShows,

      typeIncludeMeetGreet,
      onToggleTypeMeetGreet: handleToggleTypeMeetGreet,

      typeIncludeQuickEat,
      onToggleTypeQuickEat: handleToggleTypeQuickEat,

      typeIncludeSitEat,
      onToggleTypeSitEat: handleToggleTypeSitEat,
    };
  }, [
    parkIncludeDisney,
    handleToggleParkDisney,

    parkIncludeDCA,
    handleToggleParkCA,

    parkIncludeDTD,
    handleToggleParkDTD,

    typeIncludeRides,
    handleToggleTypeRides,

    typeIncludeShows,
    handleToggleTypeShows,

    typeIncludeMeetGreet,
    handleToggleTypeMeetGreet,

    typeIncludeQuickEat,
    handleToggleTypeQuickEat,

    typeIncludeSitEat,
    handleToggleTypeSitEat,
  ]);
};

const useAttractions = function (
  attractions: Attraction[],
  parkIncludeDisney: boolean,
  parkIncludeDCA: boolean,
  parkIncludeDTD: boolean,
  typeIncludeRides: boolean,
  typeIncludeShows: boolean,
  typeIncludeMeetGreet: boolean,
  typeIncludeSitEat: boolean,
  typeIncludeQuickEat: boolean
) {
  const filteredAttractions = React.useMemo(() => {
    return attractions
      .filter((a) => {
        if (!parkIncludeDCA) {
          return a.park !== ThemePark.CALIFORNIA_ADVENTURE;
        }

        return true;
      })
      .filter((a) => {
        if (!parkIncludeDisney) {
          return a.park !== ThemePark.DISNEYLAND;
        }

        return true;
      })
      .filter((a) => {
        if (!parkIncludeDTD) {
          return a.park !== ThemePark.DOWNTOWN_DISNEY;
        }

        return true;
      })
      .filter((a) => {
        if (!typeIncludeRides) {
          return a.type !== AttractionType.RIDE;
        }

        return true;
      })
      .filter((a) => {
        if (!typeIncludeShows) {
          return a.type !== AttractionType.SHOW;
        }

        return true;
      })
      .filter((a) => {
        if (!typeIncludeMeetGreet) {
          return a.type !== AttractionType.MEET_GREET;
        }

        return true;
      })
      .filter((a) => {
        if (!typeIncludeQuickEat) {
          return a.type !== AttractionType.QUICK_EAT;
        }

        return true;
      })
      .filter((a) => {
        if (!typeIncludeSitEat) {
          return a.type !== AttractionType.SIT_EAT;
        }

        return true;
      });
  }, [
    attractions,
    parkIncludeDCA,
    parkIncludeDisney,
    parkIncludeDTD,
    typeIncludeRides,
    typeIncludeShows,
    typeIncludeMeetGreet,
    typeIncludeQuickEat,
    typeIncludeSitEat,
  ]);

  const attractionList = React.useMemo(() => {
    // If the list isnt big enough for a nice animation, double it up
    let result = filteredAttractions;
    while (result.length <= 10) {
      result = [...result, ...result];
    }
    return result;
  }, [filteredAttractions]);

  return React.useMemo(() => {
    return {
      attractionList,
    };
  }, [attractionList]);
};

export const RouletteViewModel: React.FunctionComponent<
  ViewModelProps<RouletteProps, RouletteState>
> = function ({ children, ...props }) {
  const { isDark, onDarkModeToggled } = props;
  const { attractions } = props;

  const [finalIndex, setFinalIndex] = React.useState(-1);

  const {
    parkIncludeDisney,
    onToggleParkDisney,

    parkIncludeDCA,
    onToggleParkDCA,

    parkIncludeDTD,
    onToggleParkDTD,

    typeIncludeRides,
    onToggleTypeRides,

    typeIncludeShows,
    onToggleTypeShows,

    typeIncludeMeetGreet,
    onToggleTypeMeetGreet,

    typeIncludeQuickEat,
    onToggleTypeQuickEat,

    typeIncludeSitEat,
    onToggleTypeSitEat,
  } = useSelectors();

  const { attractionList } = useAttractions(
    attractions,
    parkIncludeDisney,
    parkIncludeDCA,
    parkIncludeDTD,
    typeIncludeRides,
    typeIncludeShows,
    typeIncludeMeetGreet,
    typeIncludeSitEat,
    typeIncludeQuickEat
  );

  const useRouletteToggle = React.useMemo(() => {
    return function (callback: () => void) {
      return function () {
        setFinalIndex(-1);
        callback();
      };
    };
  }, [setFinalIndex]);

  const handleToggleParkDisney = useRouletteToggle(onToggleParkDisney);
  const handleToggleParkDCA = useRouletteToggle(onToggleParkDCA);
  const handleToggleParkDTD = useRouletteToggle(onToggleParkDTD);

  const handleToggleTypeRides = useRouletteToggle(onToggleTypeRides);
  const handleToggleTypeShows = useRouletteToggle(onToggleTypeShows);
  const handleToggleTypeMeetGreet = useRouletteToggle(onToggleTypeMeetGreet);
  const handleToggleTypeQuickEat = useRouletteToggle(onToggleTypeQuickEat);
  const handleToggleTypeSitEat = useRouletteToggle(onToggleTypeSitEat);

  const state: RouletteState = React.useMemo(() => {
    return {
      isDark,
      onDarkModeToggled,

      attractions: attractionList,

      selectedIndex: finalIndex,
      onIndexSelected: setFinalIndex,

      parkIncludeDisney,
      onToggleParkIncludeDisney: handleToggleParkDisney,

      parkIncludeDCA,
      onToggleParkIncludeDCA: handleToggleParkDCA,

      parkIncludeDTD,
      onToggleParkIncludeDTD: handleToggleParkDTD,

      typeIncludeRides,
      onToggleTypeIncludeRides: handleToggleTypeRides,

      typeIncludeShows,
      onToggleTypeIncludeShows: handleToggleTypeShows,

      typeIncludeMeetGreet,
      onToggleTypeIncludeMeetGreet: handleToggleTypeMeetGreet,

      typeIncludeQuickEat,
      onToggleTypeIncludeQuickEat: handleToggleTypeQuickEat,

      typeIncludeSitEat,
      onToggleTypeIncludeSitEat: handleToggleTypeSitEat,
    };
  }, [
    isDark,
    onDarkModeToggled,

    attractionList,

    finalIndex,
    setFinalIndex,

    parkIncludeDisney,
    handleToggleParkDisney,

    parkIncludeDCA,
    handleToggleParkDCA,

    parkIncludeDTD,
    handleToggleParkDTD,

    typeIncludeRides,
    handleToggleTypeRides,

    typeIncludeShows,
    handleToggleTypeShows,

    typeIncludeMeetGreet,
    handleToggleTypeMeetGreet,

    typeIncludeQuickEat,
    handleToggleTypeQuickEat,

    typeIncludeSitEat,
    handleToggleTypeSitEat,
  ]);
  return children(state);
};
