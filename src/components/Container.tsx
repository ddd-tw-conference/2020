import { Container, ContainerProps } from "@material-ui/core";
import { css, cx } from "emotion";
import React, { forwardRef, memo, RefObject, useMemo } from "react";

const myCss = css`
  label: myContainer;
  --margin: 3em;
  padding-top: var(--margin);
  padding-bottom: var(--margin);
`;

const MyContainer = forwardRef(
  <C extends React.ElementType>(
    { className, ...props }: ContainerProps<C, { component?: C }>,
    ref?:
      | ((instance: HTMLDivElement | null) => void)
      | RefObject<HTMLDivElement>
      | null
  ) => {
    const cls = useMemo(() => cx(myCss, className), [className]);
    return <Container className={cls} {...props} ref={ref} />;
  }
);

export default memo(MyContainer);
