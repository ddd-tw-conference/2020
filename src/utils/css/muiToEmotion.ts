import { CSSProperties } from "@material-ui/styles";
import { Interpolation } from "emotion";
import mapKeys from "lodash/mapKeys";
import mapValues from "lodash/mapValues";

const mapValuesFn = (v: CSSProperties, k: string) =>
  typeof v === "object" ? muiToEmotion(v) : v;
const mapKeysFn = (v: CSSProperties, k: string) =>
  typeof v === "object" ? k : k;

const muiToEmotion: (css: CSSProperties) => Interpolation = (css) =>
  mapValues(mapKeys(css, mapKeysFn), mapValuesFn);

export default muiToEmotion;
