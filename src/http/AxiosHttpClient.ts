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

import axios, { AxiosResponse } from "axios";
import { HttpClient, HttpResponse } from "./HttpClient";

export const createAxiosHttp = function (): HttpClient {
  const axiosToResponse = function <T = any>(
    url: string,
    body: any,
    resp: AxiosResponse<T>
  ): HttpResponse<T> {
    const { data } = resp;
    const isStatusOk = resp.status >= 200 && resp.status <= 400;
    let isDataOk = true;

    // If the data payload has an 'ok' field, and it is false
    if ((data as any)["ok"] === false) {
      isDataOk = false;
    }

    return {
      objectType: "HttpResponse",
      isOk: isStatusOk && isDataOk,
      body: data,
      code: resp.status,
      statusText: resp.statusText,
      headers: resp.headers,
      requestUrl: url,
      requestBody: body,
    };
  };

  return {
    objectType: "HttpClient",

    get: async function <T>(
      url: string,
      params?: URLSearchParams,
      headers?: object
    ): Promise<HttpResponse<T>> {
      const result = await axios.get<T>(url, {
        params,
        headers,
      });
      return axiosToResponse(url, params, result);
    },

    post: async function <T>(
      url: string,
      body?: object,
      headers?: object
    ): Promise<HttpResponse<T>> {
      const result = await axios.post<T>(url, body, {
        headers,
      });
      return axiosToResponse(url, body, result);
    },

    put: async function <T>(
      url: string,
      body?: object,
      headers?: object
    ): Promise<HttpResponse<T>> {
      const result = await axios.put<T>(url, body, {
        headers,
      });
      return axiosToResponse(url, body, result);
    },
  };
};
