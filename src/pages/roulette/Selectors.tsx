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
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormControlLabelProps,
  Stack,
  SxProps,
  Typography,
} from "@mui/material";
import { ActionProps, Selectors } from "./RouletteInterfaces";

/**
 * Checkbox label props
 */
const LABEL_PROPS: FormControlLabelProps["slotProps"] = {
  typography: {
    variant: "caption",
    sx: {
      color: "text.secondary",
    },
  },
};

const RIDE_STACK_SX: SxProps = {
  width: "50%",
  height: "100%",
};

const TITLE_SX: SxProps = {
  fontWeight: 700,
  color: "text.secondary",
};

const RideSelectors: React.FunctionComponent<ActionProps & Selectors> =
  function (props) {
    const {
      parkIncludeDisney,
      onToggleParkDisney,

      parkIncludeDCA,
      onToggleParkDCA,

      parkIncludeDTD,
      onToggleParkDTD,
    } = props;
    const { spin } = props;
    return (
      <Stack direction="column" sx={RIDE_STACK_SX}>
        <Typography variant="body2" sx={TITLE_SX}>
          Parks
        </Typography>
        <FormControlLabel
          slotProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleParkDisney}
          control={<Checkbox checked={parkIncludeDisney} />}
          label="Disneyland"
        />

        <FormControlLabel
          slotProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleParkDCA}
          control={<Checkbox checked={parkIncludeDCA} />}
          label="California Adventure"
        />

        <FormControlLabel
          slotProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleParkDTD}
          control={<Checkbox checked={parkIncludeDTD} />}
          label="Downtown Disney"
        />
      </Stack>
    );
  };

const TypeSelectors: React.FunctionComponent<ActionProps & Selectors> =
  function (props) {
    const {
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
    } = props;
    const { spin } = props;
    return (
      <Stack direction="column" sx={RIDE_STACK_SX}>
        <Typography variant="body2" sx={TITLE_SX}>
          Experiences
        </Typography>
        <FormControlLabel
          slotProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleTypeRides}
          control={<Checkbox checked={typeIncludeRides} />}
          label="Rides"
        />

        <FormControlLabel
          slotProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleTypeShows}
          control={<Checkbox checked={typeIncludeShows} />}
          label="Shows / Entertainment"
        />

        <FormControlLabel
          slotProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleTypeMeetGreet}
          control={<Checkbox checked={typeIncludeMeetGreet} />}
          label="Character Meet & Greet"
        />

        <FormControlLabel
          slotProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleTypeQuickEat}
          control={<Checkbox checked={typeIncludeQuickEat} />}
          label="Quick Food and Drink"
        />

        <FormControlLabel
          slotProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleTypeSitEat}
          control={<Checkbox checked={typeIncludeSitEat} />}
          label="Sit Down Restaurants"
        />
      </Stack>
    );
  };

const SELECTOR_PROPS: SxProps = {
  pb: 2,
};

const ACTION_PROPS: SxProps = {
  width: "100%",
  pb: 2,
};

const ContentSelectors: React.FunctionComponent<ActionProps & Selectors> =
  function (props) {
    return (
      <Stack direction="row" sx={SELECTOR_PROPS}>
        <RideSelectors {...props} />
        <TypeSelectors {...props} />
      </Stack>
    );
  };

const ACTION_BOX_SX: SxProps = {
  mx: "auto",
};

const ACTION_TEXT_SX: SxProps = {
  textAlign: "center",
  color: "text.secondary",
};

export const ActionSection: React.FunctionComponent<ActionProps & Selectors> =
  function (props) {
    const { spin, onSpin } = props;
    return (
      <Container maxWidth="md">
        <Stack direction="column" sx={ACTION_PROPS}>
          <ContentSelectors {...props} />
          <Button
            variant="contained"
            fullWidth={true}
            onClick={onSpin}
            disabled={spin}
          >
            {spin ? "Spinning..." : "Spin!"}
          </Button>

          <Box sx={ACTION_BOX_SX}>
            <Typography variant="caption" sx={ACTION_TEXT_SX}>
              This Application is not affiliated with Disney company. All
              product names, logos, and brands are property of their respective
              owners.
            </Typography>
          </Box>
        </Stack>
      </Container>
    );
  };
