import "./Footer.css";
import { Row, Col, Container, Form } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container className="contact">
        <Row>
          <Col className="ml-auto mr-auto">
            <h2 className="text-center">Get in Touch</h2>
            <Form className="contact-form">
              <Row>
                <Col className="text-center">
                  <h5>Name</h5>
                  <p>Travis Cultreri</p>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <h5>Email</h5>
                  <p>traviscult@gmail.com</p>
                </Col>
              </Row>
              <Row>
                <Col className="text-center">
                  <h5>Phone Number</h5>
                  <p>310.339.7695</p>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
