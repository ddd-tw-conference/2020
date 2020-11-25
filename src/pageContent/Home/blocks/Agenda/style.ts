import { css } from "emotion";

export const cssTableCell = css`
  label: tableCell;
  width: 1px;
  padding: 4px;
  position: relative;
  vertical-align: text-top;
`;

export const cssTimeCell = css`
  label: tableCell;
  width: 1px;
  padding: 4px;
  position: relative;
  vertical-align: middle;
`;

export const cssBreakTime = css`
  label: breakTime;
  background-color: #ffe59f;

  & .${cssTableCell} {
    vertical-align: middle;
    font-size: 1.5rem;
  }
`;

export const cssDay = css`
  label: day;
  display: grid;
  gap: 5rem;
`;
