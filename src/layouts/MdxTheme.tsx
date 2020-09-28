import { Typography } from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";
import { css } from "emotion";
import React, { memo, ReactNode } from "react";

const cssH1 = css`
  label: h1;
  font-size: 2rem;
`;

const cssH2 = css`
  label: h1;
  font-size: 1.8rem;
`;

const cssH3 = css`
  label: h1;
  font-size: 1.6rem;
`;

const cssH4 = css`
  label: h1;
  font-size: 1.42rem;
`;

const cssH5 = css`
  label: h1;
  font-size: 1.27rem;
`;

const cssH6 = css`
  label: h1;
  font-size: 1.125rem;
`;

const components = () => ({
  h1: ({ children }: { children: ReactNode }) => (
    <Typography variant="h1" className={cssH1}>
      {children}
    </Typography>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <Typography variant="h2" className={cssH2}>
      {children}
    </Typography>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <Typography variant="h3" className={cssH3}>
      {children}
    </Typography>
  ),
  h4: ({ children }: { children: ReactNode }) => (
    <Typography variant="h4" className={cssH4}>
      {children}
    </Typography>
  ),
  h5: ({ children }: { children: ReactNode }) => (
    <Typography variant="h5" className={cssH5}>
      {children}
    </Typography>
  ),
  h6: ({ children }: { children: ReactNode }) => (
    <Typography variant="h6" className={cssH6}>
      {children}
    </Typography>
  ),
  p: Typography,
  li: ({ children }: { children: ReactNode }) => (
    <Typography component="li">{children}</Typography>
  ),
});

const MdxTheme = ({ children }: { children: ReactNode }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default memo(MdxTheme);
