import React from "react";
import { Helmet } from "react-helmet-async";

const BasePage = ({children , title , fluid}) => {
  return (
    <div className={fluid ? "container-fluid" : "container"} style={style}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
};

export default BasePage;
