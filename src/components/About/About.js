import { Container, Row, Col, Button } from "react-bootstrap";
import "./About.css";
import { Icon } from "@iconify/react";

export default function About() {
  return (
    <Container className="about-me-container">
      <Row>
        <Col className="about-me-title">About Me</Col>
      </Row>
      <Row>
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
            <h1>Hello!</h1>
            <p>
              My name is Carlos Fernandez and I will make this description a lot
              better trust
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
