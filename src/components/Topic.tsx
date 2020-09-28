import { css, cx } from "emotion";
import React, { forwardRef, memo, useMemo } from "react";
import CommonProps from "types/CommonProps";

const cssTopic = css`
  label: topic;
  border: 3px solid #dbdbdb;
  border-radius: 15px;
  padding: 1em 1.5em;
  & {
    ul,
    ol {
      padding-left: 1.5em;
    }
  }
`;

const Topic = forwardRef<HTMLDivElement, CommonProps<"div">>(
  ({ className, ...props }, ref) => {
    const cls = useMemo(() => cx(cssTopic, className), [className]);
    return <div className={cls} {...props} ref={ref} />;
  }
);

export default memo(Topic);
