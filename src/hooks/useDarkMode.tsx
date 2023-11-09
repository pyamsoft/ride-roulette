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
import { useAtom } from "jotai";
import { DarkTheme } from "../app/AppAtoms";
import { DarkModePreference } from "../app/Dark";

export const useDarkMode = function () {
  const [isDark, setDark] = useAtom(DarkTheme);

  const handleDarkModeToggled = React.useCallback(() => {
    setDark((d) => !d);
  }, [setDark]);

  React.useEffect(() => {
    const listener = (e: MediaQueryListEvent) => {
      setDark(e.matches);
    };

    DarkModePreference.addEventListener("change", listener);

    return () => {
      DarkModePreference.removeEventListener("change", listener);
    };
  }, [setDark]);

  return React.useMemo(() => {
    return {
      isDark,
      onDarkModeToggled: handleDarkModeToggled,
    };
  }, [isDark, handleDarkModeToggled]);
};
