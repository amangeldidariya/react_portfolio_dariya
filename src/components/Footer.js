import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <h3 className="text-right">Copyright © Amangeldi Dariya {year}, Narxoz university </h3>
    </Container>
  );
}

export default Footer;
