import { useIntl } from "gatsby-plugin-intl";
import React, { memo } from "react";
import { Helmet } from "react-helmet";

const MyHelmet = () => {
  const intl = useIntl();
  return (
    <Helmet>
      <html lang={intl.locale} />
    </Helmet>
  );
};

export default memo(MyHelmet);
