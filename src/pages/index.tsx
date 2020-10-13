import Seo from "components/Seo";
import Home from "pageContent/Home";
import React, { Fragment, memo } from "react";

function App() {
  return (
    <Fragment>
      <Seo />
      <Home />
    </Fragment>
  );
}

export default memo(App);
