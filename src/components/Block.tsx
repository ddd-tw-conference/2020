import { Typography } from "@material-ui/core";
import RwdGrid from "components/RwdGrid";
import React, { memo, ReactNode } from "react";

const Block = ({
  title,
  children,
}: {
  title?: ReactNode;
  children?: ReactNode;
}) => {
  return (
    <RwdGrid
      container
      direction="column"
      spacing={3}
      wrap="nowrap"
      alignItems="stretch"
    >
      <RwdGrid item>
        <Typography variant="h4" color="primary">
          {title}
        </Typography>
      </RwdGrid>
      <RwdGrid item>{children}</RwdGrid>
    </RwdGrid>
  );
};

export default memo(Block);
