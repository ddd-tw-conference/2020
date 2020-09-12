import {
  AppBar,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  Toolbar,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import A from "components/A";
import Button from "components/Button";
import React, { Fragment, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import LngSelector from "./LngSelector";
import logo from "./logo.png";

function NavBar() {
  const { t } = useTranslation();
  const [opened, setOpened] = useState(false);
  const open = useCallback(() => {
    setOpened(true);
  }, []);
  const close = useCallback(() => {
    setOpened(false);
  }, []);
  return (
    <Fragment>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Grid
            container
            spacing={2}
            wrap="nowrap"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <IconButton component={A} href="#top">
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
                      {t("layout.navbar.join")}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button component={A} href="#dddConf">
                      {t("layout.navbar.dddConference")}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button component={A} href="#aboutUs">
                      {t("layout.navbar.aboutUs")}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button component={A} href="#speakers">
                      {t("layout.navbar.speakers")}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button component={A} href="#agenda">
                      {t("layout.navbar.agenda")}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button component={A} href="#sponsors">
                      {t("layout.navbar.sponsors")}
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
                    <ListItem
                      button
                      component={A}
                      href="https://dddtaiwan.kktix.cc/events/dddtw-conf-2020"
                    >
                      {t("layout.navbar.join")}
                    </ListItem>
                    <ListItem
                      button
                      component={A}
                      onClick={close}
                      href="#dddConf"
                    >
                      {t("layout.navbar.dddConference")}
                    </ListItem>
                    <ListItem
                      button
                      component={A}
                      onClick={close}
                      href="#aboutUs"
                    >
                      {t("layout.navbar.aboutUs")}
                    </ListItem>
                    <ListItem
                      button
                      component={A}
                      onClick={close}
                      href="#speakers"
                    >
                      {t("layout.navbar.speakers")}
                    </ListItem>
                    <ListItem
                      button
                      component={A}
                      onClick={close}
                      href="#agenda"
                    >
                      {t("layout.navbar.agenda")}
                    </ListItem>
                    <ListItem
                      button
                      component={A}
                      onClick={close}
                      href="#sponsors"
                    >
                      {t("layout.navbar.sponsors")}
                    </ListItem>
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
