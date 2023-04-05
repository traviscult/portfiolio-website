import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Nav.css";

const IndexNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="container-fluid">
            <Nav.Link
              className="ml-auto"
              href="https://www.linkedin.com/in/travis-cultreri/"
              target="_blank"
            >
              <FaLinkedin />
            </Nav.Link>
            <Nav.Link
              className="ml-auto"
              href="https://github.com/traviscult"
              target="_blank"
            >
              <FaGithub />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default IndexNavbar;
