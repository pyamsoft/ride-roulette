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

import React, { Dispatch, RefObject } from "react";
import { Attraction, AttractionType } from "./model/Attraction";
import { ThemePark } from "./model/ThemePark";
import { useAtomValue } from "jotai";
import { AttractionList } from "../../app/AppAtoms";
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Stack,
  SxProps,
  Toolbar,
  Typography,
} from "@mui/material";
import { CellComponentProps, GridImperativeAPI } from "react-window";
import { useWindowSize } from "../../hooks/useWindowSize";
import { DarkMode, LightMode } from "@mui/icons-material";
import ReactConfetti from "react-confetti";
import { RideCard } from "./RideCard";
import { Selectors } from "./RouletteInterfaces";
import { ActionSection } from "./Selectors";
import { HorizontalList } from "./HorizontalList";

const useToggle = function (callback: Dispatch<React.SetStateAction<boolean>>) {
  return React.useCallback(() => {
    callback((d) => !d);
  }, [callback]);
};

const useSelectors = function (): Selectors {
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
  parkIncludeDisney: boolean,
  parkIncludeDCA: boolean,
  parkIncludeDTD: boolean,
  typeIncludeRides: boolean,
  typeIncludeShows: boolean,
  typeIncludeMeetGreet: boolean,
  typeIncludeSitEat: boolean,
  typeIncludeQuickEat: boolean,
) {
  const attractions = useAtomValue(AttractionList);

  const handleFilterAttractions = React.useCallback(
    (attractions: ReadonlyArray<Attraction>) => {
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
    },
    [
      parkIncludeDCA,
      parkIncludeDisney,
      parkIncludeDTD,
      typeIncludeRides,
      typeIncludeShows,
      typeIncludeMeetGreet,
      typeIncludeQuickEat,
      typeIncludeSitEat,
    ],
  );

  return React.useMemo(() => {
    let result = handleFilterAttractions(attractions);

    // Make sure there is enough to loopy loopy
    if (result.length <= 0) {
      return [];
    } else {
      // If the list isnt big enough for a nice animation, double it up
      while (result.length <= 10) {
        result = [...result, ...result];
      }
      return result;
    }
  }, [handleFilterAttractions, attractions]);
};

interface RouletteProps {
  isDark: boolean;
  onDarkModeToggled: () => void;
}

const ROULETTE_PAGE_SX: SxProps = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
};

const OVERFLOW_ONLY_Y: SxProps = {
  overflowX: "hidden",
  overflowY: "auto",
  width: "100%",
  height: "100%",
};

const BOX_SPACE_SX: SxProps = {
  flexGrow: 1,
  py: 2,
};

export const RoulettePage: React.FunctionComponent<RouletteProps> = function (
  props,
) {
  const [finalIndex, setFinalIndex] = React.useState(-1);

  const selectors = useSelectors();
  const {
    parkIncludeDisney,
    parkIncludeDCA,
    parkIncludeDTD,
    typeIncludeRides,
    typeIncludeShows,
    typeIncludeMeetGreet,
    typeIncludeQuickEat,
    typeIncludeSitEat,
  } = selectors;

  const attractionList = useAttractions(
    parkIncludeDisney,
    parkIncludeDCA,
    parkIncludeDTD,
    typeIncludeRides,
    typeIncludeShows,
    typeIncludeMeetGreet,
    typeIncludeSitEat,
    typeIncludeQuickEat,
  );

  // Grab the ref for causing random spins
  const listRef = React.useRef<GridImperativeAPI>(null);

  // Grab window size for confetti and list sizing
  const { width, height } = useWindowSize();

  // Spinning is purely animation only
  const { spin, onSpin } = useSpin(listRef, attractionList, setFinalIndex);

  // Confetti is purely animation
  const { continueDroppingConfetti, onConfettiComplete, confettiAllowed } =
    useConfetti(spin, finalIndex);

  return (
    <Box sx={ROULETTE_PAGE_SX}>
      <ReactConfetti
        recycle={continueDroppingConfetti}
        width={width}
        height={height}
        run={confettiAllowed}
        onConfettiComplete={onConfettiComplete}
      />

      <Stack direction="column" sx={OVERFLOW_ONLY_Y}>
        <TopBar {...props} />
        <ListSection
          spin={spin}
          width={width}
          height={height}
          listRef={listRef}
          selectedIndex={finalIndex}
          attractionList={attractionList}
        />

        <Box sx={BOX_SPACE_SX} />

        <ActionSection {...selectors} spin={spin} onSpin={onSpin} />
      </Stack>
    </Box>
  );
};

/**
 * The max size of a card
 */
const CARD_WIDTH = 400;
const CARD_HEIGHT = 342;

/**
 * Color back same as BG instead of slightly-off color
 */
const APP_BAR = {
  backgroundColor: "background.default",
};

const useSpin = function (
  listRef: RefObject<GridImperativeAPI | null>,
  attractions: ReadonlyArray<Attraction>,
  onSelectIndex: (i: number) => void,
) {
  const [spin, setSpin] = React.useState(false);
  const [counter, setCounter] = React.useState(0);

  const handleSpin = React.useCallback(() => {
    setSpin(true);
    onSelectIndex(-1);
  }, [setSpin, onSelectIndex]);

  const handleScrollToRandomPosition = React.useCallback(
    (final: boolean) => {
      const i = Math.random() * attractions.length;
      // Fast convert this floating point into an int without floor()
      const index = ~~i;
      if (index >= 0) {
        const c = listRef.current;
        if (c) {
          c.scrollToColumn({ index, align: "center" });
          if (final) {
            onSelectIndex(index);
          }
        }
      }
    },
    [attractions, listRef, onSelectIndex],
  );

  React.useEffect(() => {
    let timer: number | undefined;
    if (spin) {
      timer = window.setTimeout(
        () => {
          setCounter((c) => c + 1);
          handleScrollToRandomPosition(false);
        },
        counter % 2 === 0
          ? 20
          : counter % 3 === 0
            ? 45
            : counter % 7 === 0
              ? 10
              : 32,
      );
    }

    return () => {
      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, [spin, handleScrollToRandomPosition, counter, setCounter]);

  React.useEffect(() => {
    if (!spin) {
      return;
    }

    const timer = window.setTimeout(() => {
      setSpin(false);
      setCounter(0);
      handleScrollToRandomPosition(true);
    }, 3 * 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [spin, setSpin, handleScrollToRandomPosition, setCounter]);

  return React.useMemo(() => {
    return {
      spin,
      onSpin: handleSpin,
    };
  }, [spin, handleSpin]);
};

const useConfetti = function (spin: boolean, selectedIndex: number) {
  const [confettiAllowed, setConfettiAllowed] = React.useState(false);
  const [finalConfettiRain, setFinalConfettiRain] = React.useState(false);

  const continueDroppingConfetti = React.useMemo(
    () => confettiAllowed && !spin && !finalConfettiRain,
    [confettiAllowed, spin, finalConfettiRain],
  );

  // If the final confetti has completed, stop allowing the rain down
  const handleConfettiComplete = React.useCallback(() => {
    if (finalConfettiRain) {
      setConfettiAllowed(false);
      setFinalConfettiRain(false);
    }
  }, [finalConfettiRain, setConfettiAllowed, setFinalConfettiRain]);

  // TODO: Eslint complains about setState in effects
  React.useEffect(() => {
    // If we have a selected index we are allowed to show confetti
    if (selectedIndex >= 0) {
      setConfettiAllowed(true);
    }
  }, [selectedIndex, setConfettiAllowed]);

  React.useEffect(() => {
    // Don't need to stop raining if we aren't in the first place
    if (!continueDroppingConfetti) {
      return;
    }

    const timer = window.setTimeout(() => {
      setFinalConfettiRain(true);
    }, 5 * 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [continueDroppingConfetti, setFinalConfettiRain]);

  return {
    confettiAllowed,
    continueDroppingConfetti,
    onConfettiComplete: handleConfettiComplete,
  };
};

const TOP_BAR_SX: SxProps = {
  my: "auto",
  pl: 2,
};

const TOP_BAR_TEXT_SX: SxProps = {
  fontWeight: 700,
  color: "text.primary",
};

const TOP_BAR_SPACE_SX: SxProps = {
  flexGrow: 1,
};

const TOP_BAR_ICON_SX: SxProps = {
  my: "auto",
};

const TopBar: React.FunctionComponent<RouletteProps> = function (props) {
  const { isDark, onDarkModeToggled } = props;
  return (
    <AppBar position="sticky" elevation={0} sx={APP_BAR}>
      <Toolbar>
        <Box sx={TOP_BAR_SX}>
          <Typography variant="body1" sx={TOP_BAR_TEXT_SX}>
            Ride Roulette
          </Typography>
        </Box>

        <Box sx={TOP_BAR_SPACE_SX} />

        <Box sx={TOP_BAR_ICON_SX}>
          <IconButton onClick={onDarkModeToggled}>
            {isDark ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>
      </Toolbar>
      <Divider orientation="horizontal" />
    </AppBar>
  );
};

const ATTRACTION_CARD_SX: SxProps = {
  width: "100%",
  height: "100%",
  px: 2,
};

const AttractionCard = ({
  columnIndex,
  style,
  spin,
  selectedIndex,
  attractionList,
}: CellComponentProps<{
  spin: boolean;
  selectedIndex: number;
  attractionList: ReadonlyArray<Attraction>;
}>) => {
  return (
    <Box style={style}>
      <Stack direction="column" sx={ATTRACTION_CARD_SX}>
        <RideCard
          spin={spin}
          glow={selectedIndex === columnIndex}
          attraction={attractionList[columnIndex % attractionList.length]}
        />
      </Stack>
    </Box>
  );
};

const ATTRACTION_LIST_SX: SxProps = {
  width: "100%",
};

const ATTRACTION_EMPTY_SX: SxProps = {
  m: "auto",
  p: 2,
};

const NO_RIDES_SX: SxProps = {
  color: "text.secondary",
};

const ListSection: React.FunctionComponent<{
  selectedIndex: number;
  attractionList: ReadonlyArray<Attraction>;
  spin: boolean;
  width: number;
  height: number;
  listRef: RefObject<GridImperativeAPI | null>;
}> = function (props) {
  const { listRef } = props;
  const { height } = props;

  const { width, spin, selectedIndex, attractionList } = props;

  const attractionEmptyCentered: SxProps = React.useMemo(() => {
    return {
      width,
      height: height / 2,
    };
  }, [width, height]);

  return (
    <Box sx={ATTRACTION_LIST_SX}>
      {attractionList.length > 0 ? (
        <HorizontalList
          listRef={listRef}
          itemCount={attractionList.length}
          itemHeight={CARD_HEIGHT}
          itemWidth={Math.min(width, CARD_WIDTH)}
          item={AttractionCard}
          itemProps={{ spin, selectedIndex, attractionList }}
        />
      ) : (
        <Stack direction="column" sx={attractionEmptyCentered}>
          <Box sx={ATTRACTION_EMPTY_SX}>
            <Typography variant="h6" sx={NO_RIDES_SX}>
              No rides to pick from, please select a park
            </Typography>
          </Box>
        </Stack>
      )}
    </Box>
  );
};
