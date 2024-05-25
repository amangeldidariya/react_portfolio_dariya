import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <h1 className="project-heading">
          Изучала <strong className="purple"> Языки программирования </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Инструменты</strong> помощники
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
