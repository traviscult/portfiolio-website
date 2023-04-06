import "./Work.css";
import { Card, Container, Col, Row, Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

const Works = () => {
  return (
    <div className="selected-works">
      <h1>Selected Works</h1>
      <Container>
        <Row>
          <Col med="4">
            <Card className="card-avatar">
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://reddit-minimal-react-app.netlify.app/"
                  // onClick={(e) => e.preventDefault()}
                >
                  <img
                    class="card-img-top embed-responsive-item"
                    alt="Reddit Minimal Home Page"
                    src={require("../../assets/img/reddit-minimal-app.jpg")}
                  />
                </a>
              </div>
            </Card>
            <Card.Body>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://reddit-minimal-react-app.netlify.app/"
                // onClick={(e) => e.preventDefault()}
              >
                <div className="author">
                  <Card.Title tag="h4">Reddit Minimal</Card.Title>
                  <h6 className="card-category">Application</h6>
                </div>
              </a>
              <p className="card-description text-center">
                This application allows you browse and search Reddit. With the
                use of React all elements are dynamicly dispalyed and Redux.js
                manages state.
              </p>
            </Card.Body>
            <Card.Footer className="gitHubBtn">
              <Button
                variant="light"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/traviscult/reddit-minimal"
              >
                <FaGithub />
              </Button>
            </Card.Footer>
          </Col>
          <Col med="4">
            <Card className="card-avatar">
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://react-employee-directory-app.netlify.app/"
                >
                  <img
                    class="card-img-top embed-responsive-item"
                    alt="Reddit Minimal Home Page"
                    src={require("../../assets/img/employee-directory.jpg")}
                  />
                </a>
              </div>
            </Card>
            <Card.Body>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://react-employee-directory-app.netlify.app/"
                // onClick={(e) => e.preventDefault()}
              >
                <div className="author">
                  <Card.Title tag="h4">Employee Directory</Card.Title>
                  <h6 className="card-category">Application</h6>
                </div>
              </a>
              <p className="card-description text-center">
                A react application that allows you to access your companies
                employees information. An employee or manager would benefit
                greatly from being able to view non-sensitive data about other
                employees. It would be particularly helpful to be able to filter
                employees by name.
              </p>
            </Card.Body>
            <Card.Footer className="gitHubBtn">
              <Button
                variant="light"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/traviscult/employee-directory"
              >
                <FaGithub />
              </Button>
            </Card.Footer>
          </Col>
          <Col med="4">
            <Card className="card-avatar">
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://traviscult.github.io/Date-Night/"
                >
                  <img
                    class="card-img-top embed-responsive-item"
                    alt="Reddit Minimal Home Page"
                    src={require("../../assets/img/date-night.jpg")}
                  />
                </a>
              </div>
            </Card>
            <Card.Body>
              <a
                href="https://traviscult.github.io/Date-Night/"
                // onClick={(e) => e.preventDefault()}
              >
                <div className="author">
                  <Card.Title tag="h4">Date Night</Card.Title>
                  <h6 className="card-category">Application</h6>
                </div>
              </a>
              <p className="card-description text-center">
                Have you ever asked your date what they wanted to eat and they
                respond back with the dreaded "I don't know, what do you want to
                eat?" Or do you just want to surprise your date and show them
                are sophisticated and culturally diverse you are? Or do you want
                to add culturally diversity to your recipe book? This is the
                website for you!
              </p>
            </Card.Body>
            <Card.Footer className="gitHubBtn">
              <Button
                variant="light"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/traviscult/Date-Night"
              >
                <FaGithub />
              </Button>
            </Card.Footer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Works;
