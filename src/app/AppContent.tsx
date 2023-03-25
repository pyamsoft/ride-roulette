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
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useWindowSize } from "../hooks/useWindowSize";
import { useDarkMode } from "../hooks/useDarkMode";
import { AppState } from "./AppViewModel";
import { SplashPage } from "../pages/splash/SplashPage";
import { RoulettePage } from "../pages/roulette/RoulettePage";

export const AppContent: React.FunctionComponent<AppState> = function (props) {
  const { attractions, splash, onFinishSplash } = props;
  const { width, height } = useWindowSize();
  const isDark = useDarkMode();

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? "dark" : "light",
        },
      }),
    [isDark]
  );

  React.useEffect(() => {
    const style = document.createElement("style");
    style.id = "custom-css";
    style.innerHTML = `:root { --color-primary-main:${theme.palette.primary.main}; }`;

    document.head.append(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [theme]);

  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Box
          width={width}
          minWidth={width}
          maxWidth={width}
          height={height}
          minHeight={height}
          maxHeight={height}
          bgcolor="background.default"
        >
          {splash ? (
            <SplashPage
              loading={attractions.length <= 0}
              onDone={onFinishSplash}
            />
          ) : (
            <RoulettePage attractions={attractions} />
          )}
        </Box>
      </ThemeProvider>
    </CssBaseline>
  );
};
