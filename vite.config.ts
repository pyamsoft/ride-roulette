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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { scripts } from "./package.json";

import { defineConfig, splitVendorChunkPlugin, UserConfigExport } from "vite";
import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const baseConfig: UserConfigExport = {
    plugins: [react(), splitVendorChunkPlugin()],
  };

  const isProduction = mode === "production";

  if (!isProduction) {
    baseConfig.plugins = [
      ...baseConfig.plugins,
      checker({
        typescript: true,
        eslint: {
          lintCommand: scripts.eslint,
        },
        // Currently broken
        // stylelint: {
        //   lintCommand: scripts.stylelint,
        // },
      }),
    ];
  }

  return {
    ...baseConfig,
    build: {
      sourcemap: isProduction,
      minify: isProduction,
      cssMinify: isProduction,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Split up the JS code into chunks
            if (id.includes("/node_modules")) {
              // mui can be its own chunk, split further into mini-chunks
              if (id.includes("@mui")) {
                if (id.includes("@mui/x-date-pickers")) {
                  return "vendor_mui_x_date_pickers";
                } else if (id.includes("@mui/icons-material")) {
                  return "vendor_mui_icons_material";
                }
                return "vendor_mui";
              }
            }

            // Otherwise we fall back to the splitVendorChunkPlugin, which
            // also handles our src code splitting
            return undefined;
          },
        },
      },
    },
  };
});
