import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectCards";
import p1 from "../assets/projects/p1.png";
import p2 from "../assets/projects/p2.png";
import p3 from "../assets/projects/p3.png";
import p4 from "../assets/projects/p4.png";
import p5 from "../assets/projects/p5.png";
import p6 from "../assets/projects/p6.png";

function Projects() {
  return (
      <Container fluid className="project-section">
        <Container style={{ maxWidth: "1200px" }}>
          <h1 className="project-heading">
            Все мои{" "}
            <strong className="purple"> индивидуальные </strong> и{" "}
            <strong className="purple"> командные </strong> работы
          </h1>
          <p style={{ color: "white" }}>
            Проекты, которые я создавала с любовью за 3 года обучения в
            университете.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} className="project-card">
              <ProjectCard
                  imgPath={p6}
                  isBlog={false}
                  title="Fairy forest"
                  description="Parallax дизайн с использованием HTML/CSS/JS."
                  ghLink="https://github.com/dariyaamangeldi/"
              />
            </Col>
            <Col md={6} className="project-card">
              <ProjectCard
                  imgPath={p5}
                  isBlog={false}
                  title="Natural forest"
                  description="Креативный 3D дизайн с использованием HTML/CSS."
                  ghLink="https://github.com/dariyaamangeldi/"
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} className="project-card">
              <ProjectCard
                  imgPath={p4}
                  isBlog={false}
                  title="Туризм Казахстана"
                  description="Сайт освящённый городам Казахстана! Здесь вы найдёте информацию о самых значимых и интересных городах этой удивительной страны. Казахстан — это место, где встречаются величественные горы и бескрайние степи, современность и богатое историческое наследие. Сайт предоставляет подробные описания каждого города, его исторические и культурные достопримечательности, а также полезную информацию для туристов. Узнайте больше о крупнейших городах, таких как Алматы и Астана, и откройте для себя уникальные уголки страны, которые оставят незабываемые впечатления."
                  ghLink="https://github.com/dariyaamangeldi"
              />
            </Col>
            <Col md={6} className="project-card">
              <ProjectCard
                  imgPath={p1}
                  isBlog={false}
                  title="Сайт про спортсменов"
                  description="Информационный сайт о дзюдо, футболе и боксе - это онлайн-ресурс, предназначенный для предоставления информации о каждом из этих видов спорта. На сайте могут быть представлены новости, статьи, интервью, видео и фотографии, касающиеся техники, правил, истории, турниров, знаменитых спортсменов и других аспектов дзюдо, футбола и бокса. Посетители сайта могут получить актуальную информацию о событиях в мире спорта, обучиться основам и углубить свои знания о практике этих видов спорта."
                  ghLink="https://github.com/dariyaamangeldi/athletics-app"
              />
            </Col>
            <Col md={6} className="project-card">
              <ProjectCard
                  imgPath={p2}
                  isBlog={false}
                  title="Туризм"
                  description="Сайт туризма, онлайн бронирования отелей и путешествий предоставляет пользователю возможность исследовать различные места для путешествий, выбирать и бронировать отели, а также планировать свои поездки. Он предоставляет информацию о различных туристических направлениях, достопримечательностях, местах размещения, а также предлагает услуги онлайн бронирования отелей, билетов на транспорт и экскурсий. Такой сайт помогает пользователям организовать свои поездки более удобно и эффективно."
                  ghLink="https://github.com/dariyaamangeldi/"
              />
            </Col>
            <Col md={6} className="project-card">
              <ProjectCard
                  imgPath={p3}
                  isBlog={false}
                  title="Новогодний сайт"
                  description="Скролл информационного сайта про Новый год - это динамичное перемещение по веб-странице вниз или вверх с помощью прокрутки колесика мыши или свайпов на сенсорном устройстве, которое позволяет пользователям получать доступ к различной информации о Новом годе, такой как традиции, обычаи, история праздника, рецепты, подарки и т. д. Каждый скролл может открывать новый блок информации или перемещать к предыдущему или следующему разделу страницы для удобства чтения и навигации."
                  ghLink="https://github.com/dariyaamangeldi/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Projects;
