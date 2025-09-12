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

import { useSetAtom } from "jotai";
import { DefaultObjectGraph } from "./AppAtoms";
import { ObjectGraph } from "../arch/ObjectGraph";
import { createAppObjectGraph } from "./AppObjectGraph";

let _graph: ObjectGraph | undefined;
const getGraph = function (): ObjectGraph {
  if (!_graph) {
    _graph = createAppObjectGraph();
  }
  return _graph;
};

export const useInstallAppGlobals = function () {
  const graphSetter = useSetAtom(DefaultObjectGraph);
  graphSetter(getGraph());
};
