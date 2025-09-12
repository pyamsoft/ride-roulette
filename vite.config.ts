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

import { defineConfig } from "vitest/config";
import { UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";
import type { PluginOptions } from "babel-plugin-react-compiler";

const ReactCompilerConfig: Partial<PluginOptions> = {
  target: "19",
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const baseConfig: UserConfigExport = {
    plugins: [
      react({
        babel: {
          plugins: ["babel-plugin-react-compiler", ReactCompilerConfig],
        },
      }),
    ],
  };

  const isProduction = mode === "production";

  if (!isProduction) {
    baseConfig.test = {
      environment: "jsdom",
      setupFiles: "src/__test__/env/setup.env.ts",
    };
  }

  return {
    ...baseConfig,
    build: {
      sourcemap: isProduction,
      minify: isProduction,
      cssMinify: isProduction,
    },
  };
});
