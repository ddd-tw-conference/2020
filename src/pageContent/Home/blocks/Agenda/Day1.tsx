import {
  Hidden,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { useIntl } from "gatsby-plugin-intl";
import React, { Fragment, memo } from "react";
import Item, { cssBackground, cssContainer } from "./Item";
import { cssBreakTime, cssDay, cssTableCell, cssTimeCell } from "./style";

export default memo(function Day1() {
  const intl = useIntl();
  return (
    <Fragment>
      <Hidden implementation="css" mdUp>
        <div className={cssDay}>
          <Table id="agenda_d1a">
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
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  08:00
                  <br />|<br />
                  08:30
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.checkIn" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  08:30
                  <br />|<br />
                  09:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <div className={cssBackground} />
                  <div className={cssContainer}>
                    <Typography variant="h5" color="textPrimary">
                      {intl.formatMessage({
                        id: "blocks.agenda.table.opening",
                      })}
                    </Typography>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  09:00
                  <br />|<br />
                  09:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a0900" href="/speaks/a0900" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  09:50
                  <br />|<br />
                  10:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  10:00
                  <br />|<br />
                  10:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a1000" href="/speaks/a1000" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  10:50
                  <br />|<br />
                  11:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  11:00
                  <br />|<br />
                  12:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a1100" href="/speaks/a1100" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  12:00
                  <br />|<br />
                  13:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.lunchBreak" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  13:00
                  <br />|<br />
                  13:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a1300" href="/speaks/a1300" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  13:50
                  <br />|<br />
                  14:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  14:00
                  <br />|<br />
                  14:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a1400" href="/speaks/a1400" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  14:50
                  <br />|<br />
                  15:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  15:00
                  <br />|<br />
                  15:20
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a1450" href="/speaks/a1450" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  15:20
                  <br />|<br />
                  15:40
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.teaTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  15:40
                  <br />|<br />
                  17:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a1530" href="/speaks/a1530" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table id="agenda_d1b">
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
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  08:00
                  <br />|<br />
                  08:30
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.checkIn" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  08:30
                  <br />|<br />
                  09:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <div className={cssBackground} />
                  <div className={cssContainer}>
                    <Typography variant="h5" color="textPrimary">
                      {intl.formatMessage({
                        id: "blocks.agenda.table.opening",
                      })}
                    </Typography>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  09:00
                  <br />|<br />
                  09:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b0900" href="/speaks/b0900" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  09:50
                  <br />|<br />
                  10:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  10:00
                  <br />|<br />
                  10:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1000" href="/speaks/b1000" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  10:50
                  <br />|<br />
                  11:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  11:00
                  <br />|<br />
                  12:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1100" href="/speaks/b1100" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  12:00
                  <br />|<br />
                  13:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.lunchBreak" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  13:00
                  <br />|<br />
                  13:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1300" href="/speaks/b1300" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  13:50
                  <br />|<br />
                  14:00
                </TableCell>
                <TableCell align="center" className={cssTableCell} colSpan={3}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  14:00
                  <br />|<br />
                  14:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1400" href="/speaks/b1400" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  14:50
                  <br />|<br />
                  15:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  15:00
                  <br />|<br />
                  15:20
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1450" href="/speaks/b1450" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  15:20
                  <br />|<br />
                  15:40
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.teaTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  15:40
                  <br />|<br />
                  17:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1530" href="/speaks/b1530" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  17:00
                  <br />|<br />
                  17:10
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  17:10
                  <br />|<br />
                  18:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1710" href="/speaks/b1710" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table id="agenda_d1c">
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
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  08:00
                  <br />|<br />
                  08:30
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.checkIn" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  08:30
                  <br />|<br />
                  09:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <div className={cssBackground} />
                  <div className={cssContainer}>
                    <Typography variant="h5" color="textPrimary">
                      {intl.formatMessage({
                        id: "blocks.agenda.table.opening",
                      })}
                    </Typography>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  09:00
                  <br />|<br />
                  09:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c0900" href="/speaks/c0900" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  09:50
                  <br />|<br />
                  10:00
                </TableCell>
                <TableCell align="center" className={cssTableCell} colSpan={3}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  10:00
                  <br />|<br />
                  10:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c1000" href="/speaks/c1000" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  10:50
                  <br />|<br />
                  11:00
                </TableCell>
                <TableCell align="center" className={cssTableCell} colSpan={3}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  11:00
                  <br />|<br />
                  12:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c1100" href="/speaks/c1100" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  12:00
                  <br />|<br />
                  13:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.lunchBreak" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  13:00
                  <br />|<br />
                  13:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c1300" href="/speaks/c1300" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  13:50
                  <br />|<br />
                  14:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  14:00
                  <br />|<br />
                  14:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c1400" href="/speaks/c1400" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  14:50
                  <br />|<br />
                  15:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  15:00
                  <br />|<br />
                  15:20
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c1450" href="/speaks/c1450" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  15:20
                  <br />|<br />
                  15:40
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  {intl.formatMessage({ id: "blocks.agenda.table.teaTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  15:40
                  <br />|<br />
                  17:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c1530" href="/speaks/c1530" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Hidden>
      <Hidden implementation="css" smDown>
        <div className={cssDay}>
          <Table id="agenda_d1">
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
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  08:00
                  <br />|<br />
                  08:30
                </TableCell>
                <TableCell align="center" className={cssTableCell} colSpan={3}>
                  {intl.formatMessage({ id: "blocks.agenda.table.checkIn" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  08:30
                  <br />|<br />
                  09:00
                </TableCell>
                <TableCell align="center" className={cssTableCell} colSpan={3}>
                  <div className={cssBackground} />
                  <div className={cssContainer}>
                    <Typography variant="h5" color="textPrimary">
                      {intl.formatMessage({
                        id: "blocks.agenda.table.opening",
                      })}
                    </Typography>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  09:00
                  <br />|<br />
                  09:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a0900" href="/speaks/a0900" />
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b0900" href="/speaks/b0900" />
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c0900" href="/speaks/c0900" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  09:50
                  <br />|<br />
                  10:00
                </TableCell>
                <TableCell align="center" className={cssTableCell} colSpan={3}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  10:00
                  <br />|<br />
                  10:50
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
                <TableCell align="center" className={cssTimeCell}>
                  10:50
                  <br />|<br />
                  11:00
                </TableCell>
                <TableCell align="center" className={cssTableCell} colSpan={3}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  11:00
                  <br />|<br />
                  12:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a1100" href="/speaks/a1100" />
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1100" href="/speaks/b1100" />
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c1100" href="/speaks/c1100" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  12:00
                  <br />|<br />
                  13:00
                </TableCell>
                <TableCell align="center" className={cssTableCell} colSpan={3}>
                  {intl.formatMessage({ id: "blocks.agenda.table.lunchBreak" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  13:00
                  <br />|<br />
                  13:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a1300" href="/speaks/a1300" />
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1300" href="/speaks/b1300" />
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c1300" href="/speaks/c1300" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  13:50
                  <br />|<br />
                  14:00
                </TableCell>
                <TableCell align="center" className={cssTableCell} colSpan={3}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  14:00
                  <br />|<br />
                  14:50
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a1400" href="/speaks/a1400" />
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1400" href="/speaks/b1400" />
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c1400" href="/speaks/c1400" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  14:50
                  <br />|<br />
                  15:00
                </TableCell>
                <TableCell align="center" className={cssTableCell} colSpan={3}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  15:00
                  <br />|<br />
                  15:20
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a1450" href="/speaks/a1450" />
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1450" href="/speaks/b1450" />
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c1450" href="/speaks/c1450" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  15:20
                  <br />|<br />
                  15:40
                </TableCell>
                <TableCell align="center" className={cssTableCell} colSpan={3}>
                  {intl.formatMessage({ id: "blocks.agenda.table.teaTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  15:40
                  <br />|<br />
                  17:00
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="a1530" href="/speaks/a1530" />
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1530" href="/speaks/b1530" />
                </TableCell>
                <TableCell align="center" className={cssTableCell}>
                  <Item id="c1530" href="/speaks/c1530" />
                </TableCell>
              </TableRow>
              <TableRow className={cssBreakTime}>
                <TableCell align="center" className={cssTimeCell}>
                  17:00
                  <br />|<br />
                  17:10
                </TableCell>
                <TableCell align="center" className={cssTableCell} colSpan={3}>
                  {intl.formatMessage({ id: "blocks.agenda.table.breakTime" })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" className={cssTimeCell}>
                  17:10
                  <br />|<br />
                  18:00
                </TableCell>
                <TableCell />
                <TableCell align="center" className={cssTableCell}>
                  <Item id="b1710" href="/speaks/b1710" />
                </TableCell>
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Hidden>
    </Fragment>
  );
});
