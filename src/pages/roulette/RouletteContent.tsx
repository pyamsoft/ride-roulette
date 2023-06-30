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
  Container,
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

const useConfetti = function (spin: boolean, selectedIndex: number) {
  const [confettiAllowed, setConfettiAllowed] = React.useState(false);
  const [finalConfettiRain, setFinalConfettiRain] = React.useState(false);

  const continueDroppingConfetti = React.useMemo(
    () => confettiAllowed && !spin && !finalConfettiRain,
    [confettiAllowed, spin, finalConfettiRain]
  );

  // If the final confetti has completed, stop allowing the rain down
  const handleConfettiComplete = React.useCallback(() => {
    if (finalConfettiRain) {
      setConfettiAllowed(false);
      setFinalConfettiRain(false);
    }
  }, [finalConfettiRain, setConfettiAllowed, setFinalConfettiRain]);

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
    }, 5000);

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

    // Confetti is purely animation
    const { continueDroppingConfetti, onConfettiComplete, confettiAllowed } =
      useConfetti(spin, selectedIndex);

    return (
      <Box width="100%" height="100%" overflow="hidden" position="relative">
        <ReactConfetti
          recycle={continueDroppingConfetti}
          width={width}
          height={height}
          run={confettiAllowed}
          onConfettiComplete={onConfettiComplete}
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

          <Box flexGrow={1} py={2} />

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

interface ActionProps {
  spin: boolean;
  onSpin: () => void;
}

const RideSelectors: React.FunctionComponent<RouletteState & ActionProps> =
  function (props) {
    const { parkIncludeDisney, onToggleParkIncludeDisney } = props;
    const { parkIncludeDCA, onToggleParkIncludeDCA } = props;
    const { parkIncludeDTD, onToggleParkIncludeDTD } = props;
    const { spin } = props;
    return (
      <Stack direction="column" width="50%" height="100%">
        <Typography variant="body2" color="text.secondary" fontWeight={700}>
          Parks
        </Typography>
        <FormControlLabel
          componentsProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleParkIncludeDisney}
          control={<Checkbox checked={parkIncludeDisney} />}
          label="Disneyland"
        />

        <FormControlLabel
          componentsProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleParkIncludeDCA}
          control={<Checkbox checked={parkIncludeDCA} />}
          label="California Adventure"
        />

        <FormControlLabel
          componentsProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleParkIncludeDTD}
          control={<Checkbox checked={parkIncludeDTD} />}
          label="Downtown Disney"
        />
      </Stack>
    );
  };

const TypeSelectors: React.FunctionComponent<RouletteState & ActionProps> =
  function (props) {
    const { typeIncludeRides, onToggleTypeIncludeRides } = props;
    const { typeIncludeShows, onToggleTypeIncludeShows } = props;
    const { typeIncludeMeetGreet, onToggleTypeIncludeMeetGreet } = props;
    const { typeIncludeQuickEat, onToggleTypeIncludeQuickEat } = props;
    const { typeIncludeSitEat, onToggleTypeIncludeSitEat } = props;
    const { spin } = props;
    return (
      <Stack direction="column" width="50%" height="100%">
        <Typography variant="body2" color="text.secondary" fontWeight={700}>
          Content Type
        </Typography>
        <FormControlLabel
          componentsProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleTypeIncludeRides}
          control={<Checkbox checked={typeIncludeRides} />}
          label="Rides"
        />

        <FormControlLabel
          componentsProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleTypeIncludeShows}
          control={<Checkbox checked={typeIncludeShows} />}
          label="Shows / Entertainment"
        />

        <FormControlLabel
          componentsProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleTypeIncludeMeetGreet}
          control={<Checkbox checked={typeIncludeMeetGreet} />}
          label="Character Meet & Greet"
        />

        <FormControlLabel
          componentsProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleTypeIncludeQuickEat}
          control={<Checkbox checked={typeIncludeQuickEat} />}
          label="Quick Food and Drink"
        />

        <FormControlLabel
          componentsProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleTypeIncludeSitEat}
          control={<Checkbox checked={typeIncludeSitEat} />}
          label="Sit Down Restaurants"
        />
      </Stack>
    );
  };

const ContentSelectors: React.FunctionComponent<RouletteState & ActionProps> =
  function (props) {
    return (
      <Stack direction="row" pb={2}>
        <RideSelectors {...props} />
        <TypeSelectors {...props} />
      </Stack>
    );
  };

const ActionSection: React.FunctionComponent<RouletteState & ActionProps> =
  function (props) {
    const { spin, onSpin } = props;
    return (
      <Container maxWidth="md">
        <Stack direction="column" width="100%" pb={2}>
          <ContentSelectors {...props} />
          <Button
            variant="contained"
            fullWidth={true}
            onClick={onSpin}
            disabled={spin}
          >
            {spin ? "Spinning..." : "Spin!"}
          </Button>

          <Box mx="auto">
            <Typography
              variant="caption"
              textAlign="center"
              color="text.secondary"
            >
              This Application is not affiliated with Disney company. All
              product names, logos, and brands are property of their respective
              owners.
            </Typography>
          </Box>
        </Stack>
      </Container>
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
