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
import { Box, Fade, Stack, SxProps, Typography } from "@mui/material";

const STACK_SX: SxProps = {
  bgcolor: "background.default",
  width: "100%",
  height: "100%",
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 10000,
};

const BOX_SX: SxProps = {
  m: "auto",
  p: 2,
};

const TITLE_SX: SxProps = {
  textAlign: "center",
  fontWeight: 700,
  color: "text.primary",
};

export const SplashPage: React.FunctionComponent<{
  loading: boolean;
  onDone: () => void;
}> = function (props) {
  const { loading, onDone } = props;
  return (
    <Fade
      in={loading}
      onExited={onDone}
      mountOnEnter={false}
      unmountOnExit={true}
      appear={false}
      timeout={1600}
    >
      <Stack direction="column" sx={STACK_SX}>
        <Box sx={BOX_SX}>
          <Typography variant="h2" sx={TITLE_SX}>
            Ride Roulette
          </Typography>
        </Box>
      </Stack>
    </Fade>
  );
};
