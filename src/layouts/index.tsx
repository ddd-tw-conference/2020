import { Button, Link, Snackbar } from "@material-ui/core";
import { css } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import React, {
  memo,
  ReactNode,
  StrictMode,
  useCallback,
  useState,
} from "react";
import ErrorHandler from "./ErrorHandler";
import Footer from "./Footer";
import Helmet from "./Helmet";
import MdxTheme from "./MdxTheme";
import NavBar from "./NavBar";
import Theme from "./Theme";

const cssOuter = css`
  label: outer;
  overflow: hidden;
`;

const Layout = ({ children }: { children?: ReactNode }) => {
  const { locale } = useIntl();
  const [warn, setWarn] = useState(true);
  const dismissWarn = useCallback(() => {
    setWarn(false);
  }, []);
  return (
    <StrictMode>
      <Helmet />
      <Theme>
        <ErrorHandler>
          <MdxTheme>
            <div className={cssOuter}>
              <NavBar />
              <div id="top" />
              {children}
              <Footer />
            </div>
          </MdxTheme>
        </ErrorHandler>
      </Theme>
      <Snackbar
        open={warn}
        message={
          locale === "en" ? (
            <>
              {
                "This is the website for conference 2020. You can check the other information "
              }
              <Link color="secondary" href="/">
                {"here"}
              </Link>
              {"."}
            </>
          ) : (
            <>
              {"這裡是 2020 年會官網。可以來"}
              <Link color="secondary" href="/">
                {"這裡"}
              </Link>
              {"查看其他資訊。"}
            </>
          )
        }
        action={
          <Button color="secondary" size="small" onClick={dismissWarn}>
            {"Dismiss"}
          </Button>
        }
      />
    </StrictMode>
  );
};

export default memo(Layout);
