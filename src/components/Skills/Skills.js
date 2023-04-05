import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-section">
      <div classNmae="about">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto">
              <h2 className="title">About</h2>
              <h5 className="description">
                My name is Travis. I am California born but was raised on Long
                Island NY. I have a background working most aspects of the music
                and film industry. I have a strong passion for filmmaking,
                photography, and information technology.{" "}
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="skills">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto">
              <h2 className="title">Skills</h2>
              <h5 className="description">
                Node.Js, Express, JavaScript, jQuery, React.js, React, JSX, GIT,
                GitHub, MongoDB, MySQL, Mongoose, Handlebars, HTML5, CSS3,
                Bootstrap, Materialize, APIs, Heroku, Terminal, AJAX, Restful
                API, ES6, React Hooks, JSON, Sequelize{" "}
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;
