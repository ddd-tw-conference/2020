import { GridProps, Typography } from "@material-ui/core";
import {
  Email as EmailIcon,
  Facebook as FacebookIcon,
  LocationOn as LocationOnIcon,
  WatchLater as WatchLaterIcon,
} from "@material-ui/icons";
import A from "components/A";
import Container from "components/Container";
import InvertTheme from "components/InvertTheme";
import Grid from "components/RwdGrid";
import { css } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import whiteLogo from "img/white_DDD_logo.jpg";
import React, { ElementType, memo } from "react";
import Item from "./Item";
import MessengerIcon from "./MessengerIcon";

const cssContainer = css`
  label: footerContainer;
  & {
    a,
    a:visited,
    a:active {
      color: inherit;
      text-decoration: none;
    }
  }
`;

const RwdGrid = (() => {
  const RwdGrid = <C extends ElementType>(
    props: GridProps<C> & { components?: C }
  ) => {
    return <Grid rwdSize="md" {...props} />;
  };
  return memo(RwdGrid);
})();

const Footer = () => {
  const intl = useIntl();
  return (
    <InvertTheme>
      <Container className={cssContainer}>
        <RwdGrid container spacing={3}>
          <RwdGrid item lg={2} xs={12}>
            <img alt="whiteLogo" src={whiteLogo} height={80} />
          </RwdGrid>
          <RwdGrid item lg={3} xs={12}>
            <RwdGrid container direction="column" wrap="nowrap" spacing={2}>
              <RwdGrid item>
                <Typography variant="h6">
                  {intl.formatMessage({ id: "layout.navbar.info" })}
                </Typography>
              </RwdGrid>
              <RwdGrid item>
                <Item icon={<LocationOnIcon />}>Taipei, Taiwan</Item>
              </RwdGrid>
              <RwdGrid item>
                <Item icon={<WatchLaterIcon />}>
                  2020/11/27 9:00-16:00(+8:00)
                </Item>
              </RwdGrid>
            </RwdGrid>
          </RwdGrid>
          <RwdGrid item lg={4} xs={12}>
            <RwdGrid container direction="column" wrap="nowrap" spacing={2}>
              <RwdGrid item>
                <Typography variant="h6">
                  {intl.formatMessage({ id: "layout.navbar.contact" })}
                </Typography>
              </RwdGrid>
              <RwdGrid item>
                <A href="mailto:dddtwconference2020@gmail.com">
                  <Item icon={<EmailIcon />}>
                    dddtwconference2020@gmail.com
                  </Item>
                </A>
              </RwdGrid>
              <RwdGrid item>
                <A href="https://m.me/DDDCommunity.tw">
                  <Item icon={<MessengerIcon />}>m.me/DDDCommunity.tw</Item>
                </A>
              </RwdGrid>
            </RwdGrid>
          </RwdGrid>
          <RwdGrid item lg={3} xs={12}>
            <RwdGrid container direction="column" wrap="nowrap" spacing={2}>
              <RwdGrid item>
                <Typography variant="h6">
                  {intl.formatMessage({ id: "layout.navbar.aboutUs" })}
                </Typography>
              </RwdGrid>
              <RwdGrid item>
                <A href="https://www.facebook.com/DDDCommunity.tw/">
                  <Item icon={<FacebookIcon />}>DDD Taiwan</Item>
                </A>
              </RwdGrid>
            </RwdGrid>
          </RwdGrid>
          <RwdGrid item xs={12}>
            <RwdGrid container justifyContent="center" alignItems="center">
              <Typography variant="body2">
                &copy; Copyright 2020 DDD Taiwan
              </Typography>
            </RwdGrid>
          </RwdGrid>
        </RwdGrid>
      </Container>
    </InvertTheme>
  );
};

export default memo(Footer);
