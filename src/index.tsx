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

import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { App } from "./app/App";
import { ObjectGraph } from "./arch/ObjectGraph";
import { createAppObjectGraph } from "./app/AppObjectGraph";
import { AppStorage } from "./arch/AppStorage";
import { createAppStorage } from "./app/AppLocalStorage";
import "./index.css";

const initReact = function (props: {
  graph: ObjectGraph;
  storage: AppStorage;
}) {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  const { graph, storage } = props;

  // React types 18.2.22 is weird and reports this as an issue, when its not.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any = <App graph={graph} storage={storage} />
  root.render(content);
};

const main = function () {
  const graph = createAppObjectGraph();
  const storage = createAppStorage();

  initReact({ graph, storage });

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
};

main();
