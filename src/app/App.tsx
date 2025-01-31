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
import { useInstallAppGlobals } from "./AppGlobals";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useWindowSize } from "../hooks/useWindowSize";
import { useDarkMode } from "../hooks/useDarkMode";
import { SplashPage } from "../pages/splash/SplashPage";
import { RoulettePage } from "../pages/roulette/RoulettePage";
import { useAtom } from "jotai";
import {
  AttractionList,
  AttractionLoadError,
  AttractionLoading,
  ShowSplashScreen,
} from "./AppAtoms";
import { useAppViewModel } from "./useAppViewModel";
import { useFirstMount } from "../hooks/useFirstMount";

export const App: React.FunctionComponent = function () {
  useInstallAppGlobals();

  const today = React.useMemo(() => new Date(), []);
  const [showSplash, setShowSplash] = useAtom(ShowSplashScreen);
  const [attractions, setAttractions] = useAtom(AttractionList);
  const [attractionLoading, setAttractionLoading] = useAtom(AttractionLoading);
  const [attractionError, setAttractionError] = useAtom(AttractionLoadError);

  const viewModel = useAppViewModel(today);

  const { width, height } = useWindowSize();
  const { isDark, onDarkModeToggled } = useDarkMode();

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? "dark" : "light",
        },
      }),
    [isDark],
  );

  const handleFinishSplash = () => {
    viewModel.handleFinishSplashScreen(setShowSplash);
  };

  const handleLoadAttractions = React.useCallback(() => {
    viewModel.handleLoadAttractions(
      setAttractionLoading,
      setAttractions,
      setAttractionError,
    );
  }, [viewModel, setAttractionLoading, setAttractions, setAttractionError]);

  React.useEffect(() => {
    const style = document.createElement("style");
    style.id = "custom-css";

    // Custom inject CSS into the document head.
    // Wild.
    style.innerHTML = `:root{
      --color-primary-main:${theme.palette.primary.main};
      --color-background-default:${theme.palette.background.default};
    }`.replace(/\s+/g, "");

    document.head.append(style);
    return () => {
      document.head.removeChild(style);
    };
  }, [theme]);

  const firstMount = useFirstMount();
  React.useEffect(() => {
    if (!firstMount) {
      return;
    }

    handleLoadAttractions();
  }, [firstMount, handleLoadAttractions]);

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
          <RoulettePage isDark={isDark} onDarkModeToggled={onDarkModeToggled} />

          <SplashPage
            loading={
              showSplash ||
              attractionLoading ||
              !!attractionError ||
              attractions.length <= 0
            }
            onDone={handleFinishSplash}
          />
        </Box>
      </ThemeProvider>
    </CssBaseline>
  );
};
