import { css } from "emotion";
import React, { memo, ReactNode, StrictMode } from "react";
import ErrorHandler from "./ErrorHandler";
import Footer from "./Footer";
import Helmet from "./Helmet";
import NavBar from "./NavBar";
import Theme from "./Theme";

const cssOuter = css`
  label: outer;
  overflow: hidden;
`;

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <StrictMode>
      <Helmet />
      <Theme>
        <ErrorHandler>
          <div className={cssOuter}>
            <NavBar />
            <div id="top" />
            {children}
            <Footer />
          </div>
        </ErrorHandler>
      </Theme>
    </StrictMode>
  );
};

export default memo(Layout);
