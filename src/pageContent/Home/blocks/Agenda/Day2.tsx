import {
  Hidden,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
} from "@material-ui/core";
import { useIntl } from "gatsby-plugin-intl";
import React, { Fragment, memo, useState } from "react";
import Item from "./Item";
import { cssBreakTime, cssTableCell } from "./style";

export default memo(function Day1() {
  const intl = useIntl();
  const [track, setTrack] = useState("a");
  return (
    <Fragment>
      <Hidden mdUp>
        <Tabs value={track} onChange={(e, v) => setTrack(v)}>
          <Tab
            value="a"
            label={intl.formatMessage({ id: "blocks.agenda.tracks.a" })}
          />
          <Tab
            value="b"
            label={intl.formatMessage({ id: "blocks.agenda.tracks.b" })}
          />
          <Tab
            value="c"
            label={intl.formatMessage({ id: "blocks.agenda.tracks.c" })}
          />
        </Tabs>
        {track === "a" ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.time" })}
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.tracks.a" })}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  09:00 ~ 12:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item
                    type="workshops"
                    id="a0900"
                    href="/workshops/a0900"
                    session="a"
                  />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTableCell}>
                  12:00 ~ 13:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.lunchBreak" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  13:00 ~ 16:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item
                    type="workshops"
                    id="a0900"
                    href="/workshops/a0900"
                    session="b"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ) : track === "b" ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.time" })}
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.tracks.b" })}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  09:00 ~ 12:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item
                    type="workshops"
                    id="b0900"
                    href="/workshops/b0900"
                    session="a"
                  />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTableCell}>
                  12:00 ~ 13:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.lunchBreak" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  13:00 ~ 16:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item
                    type="workshops"
                    id="b0900"
                    href="/workshops/b0900"
                    session="b"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.time" })}
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.tracks.c" })}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  09:00 ~ 12:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item type="workshops" id="c0900" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTableCell}>
                  12:00 ~ 13:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.lunchBreak" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  13:00 ~ 16:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item type="workshops" id="c1300" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
      </Hidden>
      <Hidden smDown>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" className={cssTableCell}>
                {intl.formatMessage({ id: "blocks.agenda.table.time" })}
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                {intl.formatMessage({ id: "blocks.agenda.tracks.a" })}
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                {intl.formatMessage({ id: "blocks.agenda.tracks.b" })}
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                {intl.formatMessage({ id: "blocks.agenda.tracks.c" })}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center" className={cssTableCell}>
                09:00 ~ 12:00
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item
                  type="workshops"
                  id="a0900"
                  href="/workshops/a0900"
                  session="a"
                />
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item
                  type="workshops"
                  id="b0900"
                  href="/workshops/b0900"
                  session="a"
                />
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item type="workshops" id="c0900" />
              </TableCell>
            </TableRow>
            <TableRow className={cssBreakTime}>
              <TableCell align="center" className={cssTableCell}>
                12:00 ~ 13:00
              </TableCell>
              <TableCell align="center" className={cssTableCell} colSpan={3}>
                {intl.formatMessage({ id: "blocks.agenda.table.lunchBreak" })}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" className={cssTableCell}>
                13:00 ~ 16:00
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item
                  type="workshops"
                  id="a0900"
                  href="/workshops/a0900"
                  session="b"
                />
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item
                  type="workshops"
                  id="b0900"
                  href="/workshops/b0900"
                  session="b"
                />
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item type="workshops" id="c1300" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Hidden>
    </Fragment>
  );
});
