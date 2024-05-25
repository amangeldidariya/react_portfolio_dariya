import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../assets/cv/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import imgme from "../assets/img/b.jpg";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <h1 style={{fontFamily:'Montserrat', marginBottom:20}}> Мой резюме </h1>
                <img src={imgme} alt="home pic" className="img-fluid" style={{ maxHeight: "400px", width: "15%" , marginBottom:70}} />

                <Row style={{ justifyContent: "center", position: "relative", marginBottom:20 }}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp; Resume
                    </Button>

                </Row>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <br />
                    <Button
                        variant="primary"
                        href="https://www.linkedin.com/in/dariya-amangeldi-134071257/"
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                         LinkedIn
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default ResumeNew;
