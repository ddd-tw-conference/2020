import {
  Hidden,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useIntl } from "gatsby-plugin-intl";
import React, { Fragment, memo } from "react";
import Item from "./Item";
import { cssBreakTime, cssDay, cssTableCell } from "./style";

export default memo(function Day1() {
  const intl = useIntl();
  return (
    <Fragment>
      <Hidden implementation="css" mdUp>
        <div className={cssDay}>
          <Table id="agenda_d2a">
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
          <Table id="agenda_d2b">
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
          <Table id="agenda_d2c">
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
        </div>
      </Hidden>
      <Hidden implementation="css" smDown>
        <div className={cssDay}>
          <Table id="agenda_d2">
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
        </div>
      </Hidden>
    </Fragment>
  );
});
