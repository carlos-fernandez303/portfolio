import { Container, Row, Col, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Typical from "react-typical";

import "./Header.css";

export default function Header() {
  return (
    <Container fluid>
      <Row>
        <Col className="header-container">
          <Icon className="header-laptop-icon" icon="la:laptop-code" />
          <Typical className="header-name" steps={["Carlos Fernandez"]} />
          <Typical
            className="header-job"
            steps={["Software Engineer", 1200, "Web Developer", 1200]}
            loop={Infinity}
          />
          <div className="header-links-container">
            <a
              href="https://github.com/carlos-fernandez303?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <Icon className="github-icon" icon="akar-icons:github-fill" />
            </a>
            <Button
              className="resume-btn"
              variant="dark"
              href="https://drive.google.com/file/d/1xKmxIyn93-gr-Kb5JvmOLkPVeF28HZFX/view?usp=sharing"
              target="_blank"
            >
              Resume
            </Button>
            <a
              href="https://www.linkedin.com/in/carlosfernandez123/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon className="linkedin-icon" icon="akar-icons:linkedin-fill" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
