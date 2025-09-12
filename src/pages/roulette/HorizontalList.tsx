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

import { Grid, type GridProps } from "react-window";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = GridProps<any>;
type ItemProps = Props["cellProps"];

export const HorizontalList: React.FunctionComponent<{
  listRef: Props["gridRef"];
  itemCount: Props["columnCount"];
  itemHeight: Props["rowHeight"];
  itemWidth: Props["columnWidth"];
  item: Props["cellComponent"];
  itemProps: ItemProps;
}> = function (props) {
  const { listRef, itemCount, itemHeight, itemWidth, itemProps, item } = props;

  return (
    <Grid
      className="no-visual-scrollbar"
      gridRef={listRef}
      rowCount={1}
      rowHeight={itemHeight}
      columnCount={itemCount}
      columnWidth={itemWidth}
      cellProps={itemProps}
      cellComponent={item}
    />
  );
};
