import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPhpstorm,
  SiPhpmyadmin,
  SiWebstorm,
  SiPycharm,
  SiAdobeaftereffects,
  SiAdobeillustrator,

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebstorm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhpstorm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhpmyadmin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaftereffects />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAdobeillustrator />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPycharm />
        </Col>
    </Row>
  );
}

export default Toolstack;
