import {
  AppBar,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  Toolbar,
  useTheme,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import A from "components/A";
import Button from "components/Button";
import { css } from "emotion";
import { useIntl } from "gatsby-plugin-intl";
import logo from "logo.png";
import React, { Fragment, memo, useCallback, useMemo, useState } from "react";
import LngSelector from "./LngSelector";
import MyListItem from "./MyListItem";

function NavBar() {
  const theme = useTheme();
  const intl = useIntl();
  const [opened, setOpened] = useState(false);
  const open = useCallback(() => {
    setOpened(true);
  }, []);
  const close = useCallback(() => {
    setOpened(false);
  }, []);
  const cssAppBar = useMemo(
    () =>
      css({
        label: "appBarBase",
        transitionProperty: "transform",
        transitionDuration: `${theme.transitions.duration.standard}ms`,
        transitionTimingFunction: theme.transitions.easing.easeOut,
      }),
    [theme.transitions.duration.standard, theme.transitions.easing.easeOut]
  );
  return (
    <Fragment>
      <AppBar position="fixed" color="default" className={cssAppBar}>
        <Toolbar>
          <Grid
            container
            spacing={2}
            wrap="nowrap"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <IconButton component={A} href="/#top">
                <img src={logo} width="40" height="40" alt="DDD Taiwan" />
              </IconButton>
            </Grid>
            <Grid item>
              <Hidden smDown>
                <Grid
                  container
                  spacing={1}
                  wrap="nowrap"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Button
                      variant="outlined"
                      component={A}
                      href="https://dddtaiwan.kktix.cc/events/dddtw-conf-2020"
                    >
                      {intl.formatMessage({ id: "layout.navbar.join" })}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button component={A} href="/#dddConf">
                      {intl.formatMessage({
                        id: "layout.navbar.dddConference",
                      })}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button component={A} href="/#aboutUs">
                      {intl.formatMessage({ id: "layout.navbar.aboutUs" })}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button component={A} href="/#speakers">
                      {intl.formatMessage({ id: "layout.navbar.speakers" })}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button component={A} href="/#agenda">
                      {intl.formatMessage({ id: "layout.navbar.agenda" })}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button component={A} href="/#topics">
                      {intl.formatMessage({ id: "layout.navbar.topics" })}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button component={A} href="/#workshops">
                      {intl.formatMessage({ id: "layout.navbar.workshops" })}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button component={A} href="/speaker-interviews">
                      {intl.formatMessage({
                        id: "layout.navbar.speakerInterviews",
                      })}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button component={A} href="/#sponsors">
                      {intl.formatMessage({ id: "layout.navbar.sponsors" })}
                    </Button>
                  </Grid>
                  <Grid item>
                    <LngSelector />
                  </Grid>
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <IconButton onClick={open}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="top"
                  open={opened}
                  onClose={close}
                  color="transparent"
                >
                  <List>
                    <ListItem>
                      <LngSelector />
                    </ListItem>
                    <MyListItem href="https://dddtaiwan.kktix.cc/events/dddtw-conf-2020">
                      {intl.formatMessage({ id: "layout.navbar.join" })}
                    </MyListItem>
                    <MyListItem onClick={close} href="/#dddConf">
                      {intl.formatMessage({
                        id: "layout.navbar.dddConference",
                      })}
                    </MyListItem>
                    <MyListItem onClick={close} href="/#aboutUs">
                      {intl.formatMessage({ id: "layout.navbar.aboutUs" })}
                    </MyListItem>
                    <MyListItem onClick={close} href="/#speakers">
                      {intl.formatMessage({ id: "layout.navbar.speakers" })}
                    </MyListItem>
                    <MyListItem onClick={close} href="/#agenda">
                      {intl.formatMessage({ id: "layout.navbar.agenda" })}
                    </MyListItem>
                    <MyListItem onClick={close} href="/#topics">
                      {intl.formatMessage({ id: "layout.navbar.topics" })}
                    </MyListItem>
                    <MyListItem onClick={close} href="/#workshops">
                      {intl.formatMessage({ id: "layout.navbar.workshops" })}
                    </MyListItem>
                    <MyListItem onClick={close} href="/speaker-interviews">
                      {intl.formatMessage({
                        id: "layout.navbar.speakerInterviews",
                      })}
                    </MyListItem>
                    <MyListItem onClick={close} href="/#sponsors">
                      {intl.formatMessage({ id: "layout.navbar.sponsors" })}
                    </MyListItem>
                  </List>
                </Drawer>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}

export default memo(NavBar);
