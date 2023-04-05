import { Button, Container } from "react-bootstrap";
import Resume from "../../assets/resume/Travis-Cultreri-Resume.pdf";

const Header = () => {
  return (
    <>
      <Button
        rel="noopener noreferrer"
        target="_blank"
        href={Resume}
        variant="light"
      >
        Resume
      </Button>
    </>
  );
};

export default Header;
