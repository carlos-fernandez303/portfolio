import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Typical from "react-typical";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Header.css";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Franklin Gothic Medium",
    },
  },
  palette: {
    primary: {
      main: "#000",
    },
  },
});

export default function Header() {
  return (
    <Container>
      <Row>
        <Col className="header-container">
          <Icon className="header-laptop-icon" icon="la:laptop-code" />
          <Typical className="header-name" steps={["Carlos Fernandez"]} />
          <Typical className="header-job" steps={["Web Developer"]} />
          <div className="header-links-container">
            <Icon className="github-icon" icon="akar-icons:github-fill" />
            <Icon className="linkedin-icon" icon="akar-icons:linkedin-fill" />
            <ThemeProvider theme={theme}>
              <Button className="resume-btn" variant="contained">
                Resume
              </Button>
            </ThemeProvider>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
