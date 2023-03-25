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

export const useDarkMode = function () {
  const darkModePreference = React.useMemo(
    () => window.matchMedia("(prefers-color-scheme: dark)"),
    []
  );

  const initialIsDark = React.useMemo(
    () => darkModePreference.matches,
    [darkModePreference]
  );

  const [isDark, setDark] = React.useState(initialIsDark);

  React.useEffect(() => {
    const listener = (e: MediaQueryListEvent) => {
      setDark(e.matches);
    };

    darkModePreference.addEventListener("change", listener);

    return () => {
      darkModePreference.removeEventListener("change", listener);
    };
  }, [darkModePreference, setDark]);

  return isDark;
};
