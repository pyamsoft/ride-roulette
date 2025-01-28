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

import { ThemePark } from "./ThemePark";

export enum AttractionType {
  RIDE = "ride",
  SHOW = "show",
  MEET_GREET = "meet_greet",
  QUICK_EAT = "quick_eat",
  SIT_EAT = "sit_eat",
}

export interface Attraction {
  objectType: "Attraction";

  id: string;
  name: string;
  url: string;
  imageUrl: string;
  type: AttractionType;
  park: ThemePark;
}
