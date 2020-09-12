import { OverrideProps } from "@material-ui/core/OverridableComponent";
import { ElementType } from "react";

type CommonProps<D extends ElementType, P = {}> = OverrideProps<
  {
    props: P;
    defaultComponent: D;
    classKey: string;
  },
  D
>;

export default CommonProps;
