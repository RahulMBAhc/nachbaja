import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-left mb-3 mb-md-0">
            <p>&copy; 2023 NachBaja. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="/">Terms of Use</a>
              </li>
              <li className="list-inline-item">
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
