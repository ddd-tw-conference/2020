import {
  AppBar,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Toolbar,
  useTheme,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import A from "components/A";
import Button from "components/Button";
import { css } from "emotion";
import { Link, useIntl } from "gatsby-plugin-intl";
import logo from "logo.png";
import React, { Fragment, memo, useCallback, useMemo, useState } from "react";
import LngSelector from "./LngSelector";
import MyListItem from "./MyListItem";

const cssAgendaDay = css`
  label: agendaDay;
  margin-left: 2em;
`;

const cssAgendaTrack = css`
  label: agendaTrack;
  margin-left: 4em;
`;

const classesDrawer = {
  paper: css`
    label: paper;
    max-height: 80vh;
    overflow: auto;
  `,
};

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
  const [agendaMenuAnchorEl, setAgendaMenuAnchorEl] = useState(null);
  const openAgendaMenu = useCallback((e) => {
    setAgendaMenuAnchorEl(e.target);
  }, []);
  const closeAgendaMenu = useCallback(() => {
    setAgendaMenuAnchorEl(null);
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
                <Menu
                  anchorEl={agendaMenuAnchorEl}
                  open={Boolean(agendaMenuAnchorEl)}
                  onClose={closeAgendaMenu}
                >
                  <MenuItem
                    onClick={closeAgendaMenu}
                    component={Link}
                    to="/#agenda_d1"
                  >
                    {intl.formatMessage({ id: "blocks.agenda.day.day1" })}
                  </MenuItem>
                  <MenuItem
                    onClick={closeAgendaMenu}
                    component={Link}
                    to="/#agenda_d2"
                  >
                    {intl.formatMessage({ id: "blocks.agenda.day.day2" })}
                  </MenuItem>
                </Menu>
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
                    <Button onClick={openAgendaMenu}>
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
                  classes={classesDrawer}
                >
                  <List>
                    <ListItem>
                      <LngSelector closeDrawer={close} />
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
                    <ListItem>
                      {intl.formatMessage({ id: "layout.navbar.agenda" })}
                    </ListItem>
                    <ListItem className={cssAgendaDay}>
                      {intl.formatMessage({ id: "blocks.agenda.day.day1" })}
                    </ListItem>
                    <MyListItem
                      className={cssAgendaTrack}
                      onClick={close}
                      href="/#agenda_d1a"
                    >
                      {intl.formatMessage({ id: "blocks.agenda.tracks.a" })}
                    </MyListItem>
                    <MyListItem
                      className={cssAgendaTrack}
                      onClick={close}
                      href="/#agenda_d1b"
                    >
                      {intl.formatMessage({ id: "blocks.agenda.tracks.b" })}
                    </MyListItem>
                    <MyListItem
                      className={cssAgendaTrack}
                      onClick={close}
                      href="/#agenda_d1c"
                    >
                      {intl.formatMessage({ id: "blocks.agenda.tracks.c" })}
                    </MyListItem>
                    <ListItem className={cssAgendaDay}>
                      {intl.formatMessage({ id: "blocks.agenda.day.day2" })}
                    </ListItem>
                    <MyListItem
                      className={cssAgendaTrack}
                      onClick={close}
                      href="/#agenda_d2a"
                    >
                      {intl.formatMessage({ id: "blocks.agenda.tracks.a" })}
                    </MyListItem>
                    <MyListItem
                      className={cssAgendaTrack}
                      onClick={close}
                      href="/#agenda_d2b"
                    >
                      {intl.formatMessage({ id: "blocks.agenda.tracks.b" })}
                    </MyListItem>
                    <MyListItem
                      className={cssAgendaTrack}
                      onClick={close}
                      href="/#agenda_d2c"
                    >
                      {intl.formatMessage({ id: "blocks.agenda.tracks.c" })}
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
