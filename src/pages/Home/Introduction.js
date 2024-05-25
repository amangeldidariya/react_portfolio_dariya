import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/img/me2.jpg";
import Tilt from "react-parallax-tilt";

function Introduction() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={homeLogo} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Коротко <span className="purple"> Обо мне</span>
            </h1>
            <ul itemType="square" className="home-about-body">
              <li>В данный момент я погружена в учебу  <a href="https://narxoz.edu.kz/"> в университете Narxoz, </a></li>
              <li>где изучаю Digital Management and Design  <a href="https://su.edu.bd"> в рамках Школы цифровых технологий. </a></li>
              <li>В свободное время я предаюсь рисованию и вокалу, </li>
              <li>наслаждаюсь чтением разнообразных книг и,  <strong> конечно же, </strong>нахожу удовольствие в просмотре дорам и мультфильмов. </li>
              <li>Была активной в борьбе и футболе в течение  <strong> 5 лет, </strong> но, посвятившись учебе, пришлось завершить этот этап.</li>
              <li>В данное время меня увлекает создание 2D анимации и 3D моделирование, а также визуализация.</li>
            </ul>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
export default Introduction;
