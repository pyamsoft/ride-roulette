import { useSetAtom } from "jotai";
import { DefaultObjectGraph } from "./AppAtoms";
import { ObjectGraph } from "../arch/ObjectGraph";
import React from "react";
import { createAppObjectGraph } from "./AppObjectGraph";

export const useInstallAppGlobals = function () {
  const graphSetter = useSetAtom(DefaultObjectGraph);

  const graph: ObjectGraph = React.useMemo(() => createAppObjectGraph(), []);
  graphSetter(graph);
};
