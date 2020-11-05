import { Paper, Typography, useTheme } from "@material-ui/core";
import { MDXProvider, MDXProviderComponents } from "@mdx-js/react";
import { css, cx } from "emotion";
import React, { memo, ReactNode, useMemo } from "react";

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

const Wrapper = (() => {
  const cssWrapper = css`
    label: wrapper;
    & > * {
      margin-top: 1em;
    }
  `;
  const cssHeading = css`
    label: heading;
    margin-top: 0;
    & + * {
      margin-top: 0;
    }
  `;
  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <div className={cssWrapper}>
        <div className={cssHeading} />
        {children}
      </div>
    );
  }
  return memo(Wrapper);
})();

const A = memo(function A({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children: ReactNode;
}) {
  const theme = useTheme();
  const cls = useMemo(
    () =>
      cx(
        className,
        css({
          label: "a",
          color: theme.palette.primary.main,
        })
      ),
    [className, theme.palette.primary.main]
  );
  return (
    <a className={cls} href={href} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
});

const Blockquote = memo(function Blockquote({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const theme = useTheme();
  const cls = useMemo(
    () =>
      cx(
        className,
        css({
          label: "blockquote",
          color: theme.palette.grey[700],
          paddingLeft: "2em",
          paddingTop: "1em",
          paddingBottom: "1em",
          borderStyle: "solid",
          borderTopWidth: "0",
          borderRightWidth: "0",
          borderBottomWidth: "0",
          borderLeftWidth: "8px",
          borderColor: theme.palette.grey[700],
        })
      ),
    [className, theme.palette.grey]
  );
  return <Paper className={cls}>{children}</Paper>;
});

const components: MDXProviderComponents = {
  wrapper: Wrapper,
  a: A,
  blockquote: Blockquote,
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
};

const MdxTheme = ({ children }: { children: ReactNode }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default memo(MdxTheme);
