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
            <div className="job-logos">
              <Icon icon="logos:javascript" />
              <Icon icon="logos:react" />
              <Icon icon="logos:python" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
