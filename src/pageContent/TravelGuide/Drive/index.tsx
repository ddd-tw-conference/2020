import Container from "components/Container";
import React, { memo } from "react";
import Content from "./Content.mdx";

export default memo(() => {
  return (
    <Container>
      <Content />
    </Container>
  );
});
