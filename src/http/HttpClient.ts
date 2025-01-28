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

export interface HttpClient {
  objectType: "HttpClient";

  get: <
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T = any,
  >(
    url: string,
    params?: URLSearchParams,
    headers?: object,
  ) => Promise<HttpResponse<T>>;

  post: <
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T = any,
  >(
    url: string,
    body?: object,
    headers?: object,
  ) => Promise<HttpResponse<T>>;

  put: <
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T = any,
  >(
    url: string,
    body?: object,
    headers?: object,
  ) => Promise<HttpResponse<T>>;
}

export interface HttpResponse<T = StandardHttpResponseData> {
  objectType: "HttpResponse";
  isOk: boolean;
  body: T;
  code: number;
  statusText: string;
  headers: object;
  requestUrl: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestBody: any;
}

export interface StandardHttpResponseData {
  ok: boolean;
}
