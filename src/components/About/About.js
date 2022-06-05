import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import { Icon } from "@iconify/react";
import CardHeader from "./CardHeader";
export default function About() {
  return (
    <Container fluid className="about-me-container">
      <Row>
        <Col className="about-me-title">About Me</Col>
      </Row>
      <Row className="about-me-row">
        <Col className="about-me-photo">
          <div className="img-container">
            <img src="about-me-photo.jpg" alt="Carlos Fernandez" />
            <div className="job-logos-container">
              <Icon className="job-logos" icon="logos:javascript" />
              <Icon className="job-logos" icon="logos:react" />
              <Icon className="job-logos" icon="logos:python" />
            </div>
          </div>
        </Col>

        <Col>
          <div className="about-me-description">
            <CardHeader />
            <h1>Hello! </h1>
            <p>
              My name is Carlos. I am interested in software engineering using
              modern languages such as Javascript and Python. While I am
              comfortable with front-end libraries such as React, I strive to
              learn more about the backend of web development.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
