import "./Header.css";
import { Button, Container } from "react-bootstrap";
import Resume from "../../assets/resume/Travis-Cultreri-Resume.pdf";

const Header = () => {
  return (
    <>
      <div className="page-header">
        <Container>
          <div className="name">
            <h1>Travis Cultreri</h1>
            <img
              className="img-responsive img-travis"
              src={require("../../assets/img/Travis.jpg")}
              alt="Travis Cultreri"
            />
            <h3>Full Stack Web Developer.</h3>
          </div>
        </Container>
        <Button
          rel="noopener noreferrer"
          target="_blank"
          href={Resume}
          variant="light"
        >
          Download Resume
        </Button>
      </div>
    </>
  );
};

export default Header;
