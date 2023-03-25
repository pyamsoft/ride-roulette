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

import { HttpClient, HttpResponse } from "./HttpClient";

export const createDisneylandHttp = function (props: {
  http: HttpClient;
}): HttpClient {
  const { http } = props;

  const getBaseUrl = function (): string {
    return "https://disneyland.disney.go.com";
  };

  const compileHeaders = function (headers: object | undefined): object {
    const defaultHeaders = {
      /**
       * The Disney API blocks us unless we spoof our user agent to Firefox
       */
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:93.0) Gecko/20100101 Firefox/93.0",
    };

    if (!headers) {
      return defaultHeaders;
    }

    return {
      ...defaultHeaders,
      ...headers,
    };
  };

  return {
    objectType: "HttpClient",

    get: async function <T>(
      url: string,
      params?: URLSearchParams,
      headers?: object
    ): Promise<HttpResponse<T>> {
      return http.get(
        `${getBaseUrl()}/${url}`,
        params,
        compileHeaders(headers)
      );
    },

    post: async function <T>(
      url: string,
      body?: object,
      headers?: object
    ): Promise<HttpResponse<T>> {
      return http.post(`${getBaseUrl()}/${url}`, body, compileHeaders(headers));
    },

    put: async function <T>(
      url: string,
      body?: object,
      headers?: object
    ): Promise<HttpResponse<T>> {
      return http.put(`${getBaseUrl()}/${url}`, body, compileHeaders(headers));
    },
  };
};
