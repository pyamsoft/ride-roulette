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
      const i = Math.random() * attractions.length * 4;
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

const LABEL_PROPS = {
  typography: {
    color: "text.secondary",
    variant: "caption",
  } as TypographyProps,
};

const CARD_SIZE = 400;

export const RouletteContent: React.FunctionComponent<RouletteState> =
  function (props) {
    const { isDark, onDarkModeToggled } = props;
    const { attractions } = props;
    const { includeDisney, onToggleDisney } = props;
    const { includeCA, onToggleCA } = props;
    const { includeDTD, onToggleDTD } = props;
    const { selectedIndex, onIndexSelected } = props;

    const { width, height } = useWindowSize();
    const listRef = React.useRef<FixedSizeList>(null);
    const { spin, onSpin } = useSpin(listRef, attractions, onIndexSelected);

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

    const infiniteListSize = React.useMemo(
      () => attractions.length * 4,
      [attractions]
    );

    return (
      <Stack direction="column" width="100%" height="100%" overflow="hidden">
        <AppBar position="sticky" color="transparent" elevation={0}>
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
        </AppBar>

        <Box width="100%">
          {attractions.length > 0 ? (
            <FixedSizeList
              ref={listRef}
              className="no-visual-scrollbar"
              layout="horizontal"
              itemSize={Math.min(width, CARD_SIZE)}
              height={Math.min(CARD_SIZE, (height * 3) / 5)}
              itemCount={infiniteListSize}
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
        <Stack
          direction="column"
          mt="auto"
          mx="auto"
          px={2}
          pb={2}
          width={`min(100%, ${CARD_SIZE}px)`}
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
      <Card variant="outlined" sx={CARD_SX} elevation={hover ? 6 : 2}>
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
