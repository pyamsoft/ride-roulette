import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Stack,
  Typography,
  TypographyProps,
} from "@mui/material";
import { ActionProps, Selectors } from "./RouletteInterfaces";

/**
 * Checkbox label props
 */
const LABEL_PROPS = {
  typography: {
    color: "text.secondary",
    variant: "caption",
  } as TypographyProps,
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
      <Stack direction="column" width="50%" height="100%">
        <Typography variant="body2" color="text.secondary" fontWeight={700}>
          Parks
        </Typography>
        <FormControlLabel
          componentsProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleParkDisney}
          control={<Checkbox checked={parkIncludeDisney} />}
          label="Disneyland"
        />

        <FormControlLabel
          componentsProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleParkDCA}
          control={<Checkbox checked={parkIncludeDCA} />}
          label="California Adventure"
        />

        <FormControlLabel
          componentsProps={LABEL_PROPS}
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
      <Stack direction="column" width="50%" height="100%">
        <Typography variant="body2" color="text.secondary" fontWeight={700}>
          Experiences
        </Typography>
        <FormControlLabel
          componentsProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleTypeRides}
          control={<Checkbox checked={typeIncludeRides} />}
          label="Rides"
        />

        <FormControlLabel
          componentsProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleTypeShows}
          control={<Checkbox checked={typeIncludeShows} />}
          label="Shows / Entertainment"
        />

        <FormControlLabel
          componentsProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleTypeMeetGreet}
          control={<Checkbox checked={typeIncludeMeetGreet} />}
          label="Character Meet & Greet"
        />

        <FormControlLabel
          componentsProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleTypeQuickEat}
          control={<Checkbox checked={typeIncludeQuickEat} />}
          label="Quick Food and Drink"
        />

        <FormControlLabel
          componentsProps={LABEL_PROPS}
          disabled={spin}
          onChange={spin ? undefined : onToggleTypeSitEat}
          control={<Checkbox checked={typeIncludeSitEat} />}
          label="Sit Down Restaurants"
        />
      </Stack>
    );
  };

const ContentSelectors: React.FunctionComponent<ActionProps & Selectors> =
  function (props) {
    return (
      <Stack direction="row" pb={2}>
        <RideSelectors {...props} />
        <TypeSelectors {...props} />
      </Stack>
    );
  };

export const ActionSection: React.FunctionComponent<ActionProps & Selectors> =
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
