import {
  Hidden,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs
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
                  09:00 ~ 09:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a0900" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTableCell}>
                  09:50 ~ 10:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  10:00 ~ 10:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a1000" href="/speaks/a1000" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTableCell}>
                  10:50 ~ 11:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  11:00 ~ 12:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a1100" />
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
                  13:00 ~ 13:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a1300" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTableCell}>
                  13:50 ~ 14:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  14:00 ~ 14:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a1400" href="/speaks/a1400" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  14:50 ~ 15:10
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a1450" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTableCell}>
                  15:10 ~ 15:30
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.teaTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  15:30 ~ 17:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a1530" href="/speaks/a1530" />
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
                  09:00 ~ 09:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b0900" href="/speaks/b0900" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTableCell}>
                  09:50 ~ 10:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  10:00 ~ 10:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1000" href="/speaks/b1000" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTableCell}>
                  10:50 ~ 11:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  11:00 ~ 12:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1100" href="/speaks/b1100" />
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
                  13:00 ~ 13:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1300" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTableCell}>
                  13:50 ~ 14:00
                </TableCell>
                <TableCell align="center" className={cssTableCell} colSpan={3}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  14:00 ~ 14:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1400" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  14:50 ~ 15:10
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1450" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTableCell}>
                  15:10 ~ 15:30
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.teaTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  15:30 ~ 17:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1530" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTableCell}>
                  17:00 ~ 17:10
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  17:10 ~ 18:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1710" href="/speaks/b1710" />
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
                  09:00 ~ 09:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c0900" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTableCell}>
                  09:50 ~ 10:00
                </TableCell>
                <TableCell align="center" className={cssTableCell} colSpan={3}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  10:00 ~ 10:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c1000" href="/speaks/c1000" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTableCell}>
                  10:50 ~ 11:00
                </TableCell>
                <TableCell align="center" className={cssTableCell} colSpan={3}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  11:00 ~ 12:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c1100" />
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
                  13:00 ~ 13:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c1300" href="/speaks/c1300" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTableCell}>
                  13:50 ~ 14:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  14:00 ~ 14:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c1400" href="/speaks/c1400" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  14:50 ~ 15:10
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c1450" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTableCell}>
                  15:10 ~ 15:30
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.teaTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTableCell}>
                  15:30 ~ 17:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c1530" href="/speaks/c1530" />
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
                09:00 ~ 09:50
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="a0900" />
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="b0900" href="/speaks/b0900" />
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="c0900" />
              </TableCell>
            </TableRow>
            <TableRow className={cssBreakTime}>
              <TableCell align="center" className={cssTableCell}>
                09:50 ~ 10:00
              </TableCell>
              <TableCell align="center" className={cssTableCell} colSpan={3}>
                {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" className={cssTableCell}>
                10:00 ~ 10:50
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="a1000" href="/speaks/a1000" />
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="b1000" href="/speaks/b1000" />
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="c1000" href="/speaks/c1000" />
              </TableCell>
            </TableRow>
            <TableRow className={cssBreakTime}>
              <TableCell align="center" className={cssTableCell}>
                10:50 ~ 11:00
              </TableCell>
              <TableCell align="center" className={cssTableCell} colSpan={3}>
                {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" className={cssTableCell}>
                11:00 ~ 12:00
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="a1100" />
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="b1100" href="/speaks/b1100" />
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="c1100" />
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
                13:00 ~ 13:50
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="a1300" />
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="b1300" />
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="c1300" href="/speaks/c1300" />
              </TableCell>
            </TableRow>
            <TableRow className={cssBreakTime}>
              <TableCell align="center" className={cssTableCell}>
                13:50 ~ 14:00
              </TableCell>
              <TableCell align="center" className={cssTableCell} colSpan={3}>
                {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" className={cssTableCell}>
                14:00 ~ 14:50
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="a1400" href="/speaks/a1400" />
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="b1400" />
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="c1400" href="/speaks/c1400" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" className={cssTableCell}>
                14:50 ~ 15:10
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="a1450" />
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="b1450" />
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="c1450" />
              </TableCell>
            </TableRow>
            <TableRow className={cssBreakTime}>
              <TableCell align="center" className={cssTableCell}>
                15:10 ~ 15:30
              </TableCell>
              <TableCell align="center" className={cssTableCell} colSpan={3}>
                {intl.formatMessage({ id: "blocks.agenda.table.teaTime" })}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" className={cssTableCell}>
                15:30 ~ 17:00
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="a1530" href="/speaks/a1530" />
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="b1530" />
              </TableCell>
              <TableCell align="center" className={cssTableCell}>
                <Item id="c1530" href="/speaks/c1530" />
              </TableCell>
            </TableRow>
            <TableRow className={cssBreakTime}>
              <TableCell align="center" className={cssTableCell}>
                17:00 ~ 17:10
              </TableCell>
              <TableCell align="center" className={cssTableCell} colSpan={3}>
                {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" className={cssTableCell}>
                17:10 ~ 18:00
              </TableCell>
              <TableCell />
              <TableCell align="center" className={cssTableCell}>
                <Item id="b1710" href="/speaks/b1710" />
              </TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      </Hidden>
    </Fragment>
  );
});
