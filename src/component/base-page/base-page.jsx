import { Container } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";

const BasePage = ({ children, title ,fluid}) => {
  return (
    <Container maxWidth={fluid} fixed className="border">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Container>
  );
};

export default BasePage;
