import { GatsbyLinkProps, Link } from "gatsby";
import React, { forwardRef, memo, useMemo } from "react";
import CommonProps from "types/CommonProps";
import isExternal from "utils/url/isExternal";
import isMailTo from "utils/url/isMailTo";

export type AProps = (CommonProps<"a"> | GatsbyLinkProps<{}>) & {
  href: string;
};

const A = forwardRef(({ href, children, ...props }: AProps, ref?: any) => {
  const isExt = useMemo(() => isExternal(href), [href]);
  const isMail = useMemo(() => isMailTo(href), [href]);
  const rel = useMemo(() => (isExt ? "noopener noreferrer" : undefined), [
    isExt,
  ]);
  const target = useMemo(() => (isExt ? "_blank" : undefined), [isExt]);
  return isExt || isMail ? (
    <a rel={rel} href={href} target={target} {...props} ref={ref}>
      {children}
    </a>
  ) : (
    <Link {...props} to={href} ref={ref}>
      {children}
    </Link>
  );
});

export default memo(A);
