import { Container, Row, Col, Button } from "react-bootstrap";
import "./About.css";
import { Icon } from "@iconify/react";
import CardHeader from "./CardHeader";
export default function About() {
  return (
    <Container className="about-me-container">
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
              My name is Carlos. I am interested conducting spatial analyses
              with GIS concepts such as Spatial Autocorrelation and Quadtree
              data structures. I also enjoy developing interactive web
              applications with React.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
