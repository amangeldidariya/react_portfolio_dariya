import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPhp,
  DiReact,
  DiPython,
  DiLaravel,
  DiJavascript,
  DiPostgresql,
} from "react-icons/di";
import {FaAdobe
} from "@react-icons/all-files/fa/FaAdobe";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiPostgresql />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <FaAdobe />
        </Col>

    </Row>
  );
}

export default Techstack;
