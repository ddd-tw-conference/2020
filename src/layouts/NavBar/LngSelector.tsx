import { InputAdornment, MenuItem, Select, useTheme } from "@material-ui/core";
import { Translate as TranslateIcon } from "@material-ui/icons";
import { css } from "emotion";
import { changeLocale, useIntl } from "gatsby-plugin-intl";
import React, { ChangeEvent, memo, useCallback, useMemo } from "react";

const languages: {
  [key: string]: string | undefined;
} = {
  en: "English",
  "zh-TW": "中文",
};

const LngSelector = ({ closeDrawer }: { closeDrawer?: () => void }) => {
  const theme = useTheme();
  const cssColor = useMemo(
    () =>
      css({
        label: "color",
        color: theme.palette.primary.main,
      }),
    [theme.palette.primary.main]
  );
  const classesSelect = useMemo(
    () => ({
      root: cssColor,
      icon: cssColor,
    }),
    [cssColor]
  );
  const intl = useIntl();
  const value = useMemo(() => intl.locale, [intl.locale]);
  const changeHandler = useCallback(
    (e: ChangeEvent<{ value: unknown }>) => {
      if (closeDrawer) closeDrawer();
      changeLocale(String(e.target.value));
    },
    [closeDrawer]
  );
  return (
    <Select
      classes={classesSelect}
      value={value}
      onChange={changeHandler}
      startAdornment={
        <InputAdornment position="start">
          <TranslateIcon className={cssColor} />
        </InputAdornment>
      }
      disableUnderline
    >
      {languages[value] === undefined ? (
        <MenuItem value={value} disabled>
          {value}
        </MenuItem>
      ) : (
        <MenuItem className={cssColor} value={value}>
          {languages[value]}
        </MenuItem>
      )}
      {Object.entries(languages).map(([k, v]) =>
        k === value ? null : (
          <MenuItem className={cssColor} key={k} value={k}>
            {v}
          </MenuItem>
        )
      )}
    </Select>
  );
};

export default memo(LngSelector);
