import { InputAdornment, MenuItem, Select, useTheme } from "@material-ui/core";
import { Translate as TranslateIcon } from "@material-ui/icons";
import { css } from "emotion";
import React, { ChangeEvent, memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

const languages: {
  [key: string]: string | undefined;
} = {
  en: "English",
  "zh-TW": "中文",
};

const LngSelector = () => {
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
  const { i18n } = useTranslation();
  const value = useMemo(() => i18n.language, [i18n.language]);
  const changeHandler = useCallback(
    (e: ChangeEvent<{ value: unknown }>) => {
      i18n.changeLanguage(String(e.target.value));
    },
    [i18n]
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
