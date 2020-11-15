import { css } from "emotion";
import { navBarHeight } from "layouts/Theme";

export const img = css({
  label: "img",
  maxHeight: `calc(100vh - ${navBarHeight}px - 3rem)`,
  maxWidth: "100%",
});
