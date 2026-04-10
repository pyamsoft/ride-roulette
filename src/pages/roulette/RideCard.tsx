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

import React from "react";
import { Attraction } from "./model/Attraction";
import {
  Box,
  Card,
  ListItemButton,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import { ThemePark } from "./model/ThemePark";

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

const BOX_SX: SxProps = {
  border: 8,
  borderColor: "background.default",
  borderRadius: CARD_BORDER_RADIUS + 2,
  width: "100%",
  height: "100%",
};

const CARD_STACK_SX: SxProps = {
  width: "100%",
  height: "100%",
};

const INNER_CARD_STACK_SX: SxProps = {
  p: 2,
  width: "100%",
};

const PARK_TEXT_SX: SxProps = {
  fontWeight: 700,
  color: "text.secondary",
};

const ATTRACTION_TEXT_SX: SxProps = {
  fontWeight: 700,
  color: "text.primary",
};

export const RideCard: React.FunctionComponent<{
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
      className={glow ? "selected-border" : undefined}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
      sx={BOX_SX}
    >
      <Card variant="elevation" sx={CARD_SX} elevation={hover ? 3 : 1}>
        <ListItemButton
          onClick={handleGoTo}
          dense={true}
          disableGutters={true}
          disabled={spin}
          sx={BUTTON_SX}
        >
          <Stack direction="column" sx={CARD_STACK_SX}>
            <img
              src={attraction.imageUrl}
              alt={attraction.name}
              width="100%"
              height="auto"
            />
            <Stack direction="column" sx={INNER_CARD_STACK_SX}>
              <Typography variant="caption" sx={PARK_TEXT_SX}>
                {park}
              </Typography>

              <Typography variant="h6" sx={ATTRACTION_TEXT_SX}>
                {attraction.name}
              </Typography>
            </Stack>
          </Stack>
        </ListItemButton>
      </Card>
    </Box>
  );
};
