import React, { forwardRef } from "react";
import { VictoryPrimitiveShapeProps } from "./types";

// eslint-disable-next-line prefer-arrow-callback
export const Path = forwardRef(function Path(
  props: VictoryPrimitiveShapeProps,
  ref,
) {
  // eslint-disable-next-line react/prop-types
  const { desc, ...rest } = props;
  return desc ? (
    // @ts-expect-error FIXME: "id cannot be a number"
    <path {...rest} ref={ref}>
      <desc>{desc}</desc>
    </path>
  ) : (
    // @ts-expect-error FIXME: "id cannot be a number"
    <path {...rest} ref={ref} />
  );
});
