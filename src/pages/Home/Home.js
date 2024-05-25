import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImg from "../../assets/img/aaa.jpg";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import Aboutcard from "../About/AboutCard";
import Introduction from "./Introduction";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading-name">
                                Добро пожаловать в мой мир!
                            </h1>
                            <h1 className="heading-name">
                                Я <strong className="main-name"> Амангелді Дария Қайыркенқызы </strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col>

                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <Card className="project-card-view">
                                <Card.Body>
                                    <Tilt>
                                        <img src={myImg} alt="home pic" className="img-fluid" style={{ maxHeight: "550px", width: "100%" }} />
                                    </Tilt>
                                    <p style={{ textAlign: "center", fontFamily: 'Montserrat' }}>
                                        <br />
                                        Чувствительная душа уникального союза "DABL" || "W"
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: "center" }}>
                        <Col
                            md={12}
                            style={{
                                justifyContent: "center",
                                paddingBottom: "50px",
                                textAlign: "center",
                            }}
                        >
                            <Introduction />
                            <Aboutcard />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;
