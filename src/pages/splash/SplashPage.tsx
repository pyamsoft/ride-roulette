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
import { Box, Fade, Stack, Typography } from "@mui/material";

export const SplashPage: React.FunctionComponent<{
  loading: boolean;
  onDone: () => void;
}> = function (props) {
  const { loading, onDone } = props;
  return (
    <Fade in={loading} timeout={1000} onExited={onDone}>
      <Stack direction="column" width="100%" height="100%">
        <Box m="auto" p={2}>
          <Typography
            variant="h2"
            fontWeight={700}
            color="text.primary"
            textAlign="center"
          >
            Ride Roulette
          </Typography>
        </Box>
      </Stack>
    </Fade>
  );
};
