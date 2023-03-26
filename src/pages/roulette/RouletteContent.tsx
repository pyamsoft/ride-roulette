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

import { RouletteState } from "./RouletteViewModel";
import React, { RefObject } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  ListItemButton,
  Stack,
  SxProps,
  Toolbar,
  Typography,
  TypographyProps,
} from "@mui/material";
import { Attraction } from "./model/Attraction";
import { ThemePark } from "./model/ThemePark";
import { FixedSizeList } from "react-window";
import { useWindowSize } from "../../hooks/useWindowSize";
import { DarkMode, LightMode } from "@mui/icons-material";
import ReactConfetti from "react-confetti";

/**
 * Checkbox label props
 */
const LABEL_PROPS = {
  typography: {
    color: "text.secondary",
    variant: "caption",
  } as TypographyProps,
};

/**
 * The max size of a card
 */
const CARD_SIZE = 400;

/**
 * Only allow Y scrolling
 */
const OVERFLOW_ONLY_Y = {
  overflowX: "hidden",
  overflowY: "auto",
};

/**
 * Color back same as BG instead of slightly-off color
 */
const APP_BAR = {
  backgroundColor: "background.default",
};

const useSpin = function (
  listRef: RefObject<FixedSizeList>,
  attractions: Attraction[],
  onSelectIndex: (i: number) => void
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
          c.scrollToItem(index, "center");
          if (final) {
            onSelectIndex(index);
          }
        }
      }
    },
    [attractions, listRef, onSelectIndex]
  );

  React.useEffect(() => {
    if (!spin) {
      setCounter(0);
      return;
    }

    const timer = window.setTimeout(
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
        : 32
    );

    return () => {
      window.clearTimeout(timer);
    };
  }, [spin, handleScrollToRandomPosition, counter, setCounter]);

  React.useEffect(() => {
    if (!spin) {
      return;
    }

    const timer = window.setTimeout(() => {
      setSpin(false);
      handleScrollToRandomPosition(true);
    }, 5 * 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [spin, setSpin, handleScrollToRandomPosition]);

  return React.useMemo(() => {
    return {
      spin,
      onSpin: handleSpin,
    };
  }, [spin, handleSpin]);
};

export const RouletteContent: React.FunctionComponent<RouletteState> =
  function (props) {
    const { attractions } = props;
    const { selectedIndex, onIndexSelected } = props;

    // Grab the ref for causing random spins
    const listRef = React.useRef<FixedSizeList>(null);

    // Grab window size for confetti and list sizing
    const { width, height } = useWindowSize();

    // Spinning is purely animation only
    const { spin, onSpin } = useSpin(listRef, attractions, onIndexSelected);

    const [rain, setRain] = React.useState(false);
    const handleConfettiComplete = React.useCallback(() => {
      if (selectedIndex < 0) {
        setRain(false);
      }
    }, [selectedIndex]);

    React.useEffect(() => {
      if (selectedIndex >= 0) {
        setRain(true);
      }
    }, [selectedIndex, setRain]);

    return (
      <Box width="100%" height="100%" overflow="hidden" position="relative">
        <ReactConfetti
          run={rain}
          recycle={selectedIndex >= 0}
          width={width}
          height={height}
          gravity={0.3}
          onConfettiComplete={handleConfettiComplete}
        />

        <Stack
          direction="column"
          width="100%"
          height="100%"
          sx={OVERFLOW_ONLY_Y}
        >
          <TopBar {...props} />
          <ListSection
            {...props}
            spin={spin}
            width={width}
            height={height}
            listRef={listRef}
          />
          <ActionSection {...props} spin={spin} onSpin={onSpin} />
        </Stack>
      </Box>
    );
  };

const TopBar: React.FunctionComponent<RouletteState> = function (props) {
  const { isDark, onDarkModeToggled } = props;
  return (
    <AppBar position="sticky" elevation={0} sx={APP_BAR}>
      <Toolbar>
        <Box my="auto" pl={2}>
          <Typography variant="body1" color="text.primary" fontWeight={700}>
            Ride Roulette
          </Typography>
        </Box>

        <Box flexGrow={1} />

        <Box my="auto">
          <IconButton onClick={onDarkModeToggled}>
            {isDark ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>
      </Toolbar>
      <Divider orientation="horizontal" light={true} />
    </AppBar>
  );
};

const ListSection: React.FunctionComponent<
  RouletteState & {
    spin: boolean;
    width: number;
    height: number;
    listRef: RefObject<FixedSizeList>;
  }
> = function (props) {
  const { spin } = props;
  const { listRef } = props;
  const { width, height } = props;
  const { selectedIndex, attractions } = props;

  const Column = React.useCallback(
    (listProps: { index: number; style: object }) => {
      const { style, index } = listProps;
      return (
        <Box style={style}>
          <Stack direction="column" width="100%" height="100%" px={2}>
            <RideCard
              spin={spin}
              glow={selectedIndex === index}
              attraction={attractions[index % attractions.length]}
            />
          </Stack>
        </Box>
      );
    },
    [attractions, selectedIndex, spin]
  );

  return (
    <Box width="100%">
      {attractions.length > 0 ? (
        <FixedSizeList
          ref={listRef}
          className="no-visual-scrollbar"
          layout="horizontal"
          itemSize={Math.min(width, CARD_SIZE)}
          height={CARD_SIZE}
          itemCount={attractions.length}
          width={width}
        >
          {Column}
        </FixedSizeList>
      ) : (
        <Stack direction="column" width={width} height={height / 2}>
          <Box m="auto" p={2}>
            <Typography variant="h6" color="text.secondary">
              No rides to pick from, please select a park
            </Typography>
          </Box>
        </Stack>
      )}
    </Box>
  );
};

const ActionSection: React.FunctionComponent<
  RouletteState & { spin: boolean; onSpin: () => void }
> = function (props) {
  const { includeDisney, onToggleDisney } = props;
  const { includeCA, onToggleCA } = props;
  const { includeDTD, onToggleDTD } = props;
  const { spin, onSpin } = props;
  return (
    <Stack
      direction="column"
      mt="auto"
      mx="auto"
      px={2}
      pb={2}
      width={`min(100%, 600px)`}
    >
      <Stack direction="row" justifyContent="center" pb={2}>
        <FormControlLabel
          componentsProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleDisney}
          control={<Checkbox checked={includeDisney} />}
          label="Disneyland"
        />

        <FormControlLabel
          componentsProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleCA}
          control={<Checkbox checked={includeCA} />}
          label="California Adventure"
        />

        <FormControlLabel
          componentsProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleDTD}
          control={<Checkbox checked={includeDTD} />}
          label="Downtown Disney"
        />
      </Stack>
      <Button
        variant="contained"
        fullWidth={true}
        onClick={onSpin}
        disabled={spin}
      >
        {spin ? "Spinning..." : "Spin!"}
      </Button>

      <Box mx="auto">
        <Typography variant="caption" textAlign="center" color="text.secondary">
          This Application is not affiliated with Disney company. All product
          names, logos, and brands are property of their respective owners.
        </Typography>
      </Box>
    </Stack>
  );
};

const useParkToName = function (park: ThemePark): string {
  return React.useMemo(() => {
    switch (park) {
      case ThemePark.DISNEYLAND:
        return "Disneyland";
      case ThemePark.CALIFORNIA_ADVENTURE:
        return "California Adventure";
      case ThemePark.DOWNTOWN_DISNEY:
        return "Downtown Disney";
    }
  }, [park]);
};

const CARD_BORDER_RADIUS = 3;
const CARD_SX: SxProps = {
  borderRadius: CARD_BORDER_RADIUS,
  height: "100%",
  padding: 0,
  margin: 0,
};
const BUTTON_SX: SxProps = {
  width: "100%",
  height: "100%",
  padding: 0,
  margin: 0,
};

const RideCard: React.FunctionComponent<{
  spin: boolean;
  attraction: Attraction;
  glow: boolean;
}> = function (props) {
  const { attraction, glow, spin } = props;

  const [hover, setHover] = React.useState(false);

  const handleMouseIn = React.useCallback(() => {
    setHover(true);
  }, [setHover]);

  const handleMouseOut = React.useCallback(() => {
    setHover(false);
  }, [setHover]);

  const park = useParkToName(attraction.park);

  const handleGoTo = React.useCallback(() => {
    window.open(`https://disneyland.disney.go.com/${attraction.url}`, "_blank");
  }, [attraction]);

  return (
    <Box
      border={8}
      borderColor="background.default"
      borderRadius={CARD_BORDER_RADIUS + 2}
      width="100%"
      height="100%"
      className={glow ? "selected-border" : undefined}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
    >
      <Card variant="elevation" sx={CARD_SX} elevation={hover ? 3 : 1}>
        <ListItemButton
          onClick={handleGoTo}
          dense={true}
          disableGutters={true}
          disabled={spin}
          sx={BUTTON_SX}
        >
          <Stack direction="column" width="100%" height="100%">
            <img
              src={attraction.imageUrl}
              alt={attraction.name}
              width="100%"
              height="auto"
            />
            <Stack direction="column" p={2} width="100%">
              <Typography
                variant="caption"
                color="text.secondary"
                fontWeight={700}
              >
                {park}
              </Typography>

              <Typography variant="h6" color="text.primary" fontWeight={700}>
                {attraction.name}
              </Typography>
            </Stack>
          </Stack>
        </ListItemButton>
      </Card>
    </Box>
  );
};
