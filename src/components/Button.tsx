import { Button, ButtonProps } from "@material-ui/core";
import { css } from "emotion";
import React, {
  ElementType,
  forwardRef,
  memo,
  RefObject,
  useMemo,
} from "react";

const cssDefault = css`
  label: default;
  text-transform: none;
`;

const MyButton = forwardRef(
  <D extends ElementType<any> = "button", P = {}>(
    { className, ...props }: ButtonProps<D, P>,
    ref:
      | ((instance: HTMLButtonElement | null) => void)
      | RefObject<HTMLButtonElement>
      | null
  ) => {
    const cls = useMemo(() => css(cssDefault, className), [className]);
    return <Button {...props} className={cls} ref={ref} />;
  }
);

export default memo(MyButton);
