import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Typical from "react-typical";
import "./Header.css";
export default function Header() {
  return (
    <Container>
      <Row>
        <Col>
          <Icon icon="la:laptop-code" />
        </Col>
      </Row>
      <Row>
        <Typical className="name" steps={["Carlos Fernandez"]} />
      </Row>
      <Row>
        <Typical steps={["Web Developer"]} />
      </Row>
    </Container>
  );
}
