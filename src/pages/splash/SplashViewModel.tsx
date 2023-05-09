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
import { ViewModelProps } from "../../arch/ViewModel";

interface Shared {
  loading: boolean;
  onDone: () => void;
}

export type SplashProps = Shared;

export type SplashState = Shared;

export const SplashViewModel: React.FunctionComponent<
  ViewModelProps<SplashProps, SplashState>
> = function ({ children, ...props }) {
  const { loading } = props;
  const { onDone } = props;

  const state: SplashState = React.useMemo(() => {
    return {
      loading,
      onDone,
    };
  }, [loading, onDone]);
  return children(state);
};
