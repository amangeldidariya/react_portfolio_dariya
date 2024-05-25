import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view" >
      <Card.Body>
        <blockquote className="blockquote">
          <br />
          <p style={{ textAlign: 'justify' }}>
            *Работает? -Не трогай.
            {" "}
          </p>
          <footer className="blockquote-footer">Любой программист.</footer>


          <p style={{ textAlign: 'justify' }}>
            "Когда устаете, учитесь отдыхать, а не сдаваться."
            {" "}
          </p>
          <footer className="blockquote-footer">Abylay Kenzhaly</footer>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
