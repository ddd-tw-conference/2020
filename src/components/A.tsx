import React, { forwardRef, memo, useMemo } from "react";
import CommonProps from "types/CommonProps";
import isExternal from "utils/url/isExternal";

const A = forwardRef<
  HTMLAnchorElement,
  CommonProps<"a"> & { href: string; js?: boolean }
>(({ href, children, ...props }, ref) => {
  const isExt = useMemo(() => isExternal(href), [href]);
  const rel = useMemo(() => (isExt ? "noopener noreferrer" : undefined), [
    isExt,
  ]);
  const target = useMemo(() => (isExt ? "_blank" : undefined), [isExt]);
  return (
    <a rel={rel} href={href} target={target} {...props} ref={ref}>
      {children}
    </a>
  );
});

export default memo(A);
