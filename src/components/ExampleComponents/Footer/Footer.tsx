import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    const currentYear = new Date().getFullYear();
    return(

        <div className="footer-container">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col xs={12} md={6} className="text-center text-md-left">
              <p className="footer-text">
                <img src="/src/components/layout/header/img/LogoUVE.png" alt="UVE Logo" className="footer-logo" style={{ width: '10vh' }} />
                <span>© {currentYear} Copyright: UVE</span>
              </p>
            </Col>
            <Col xs={12} md={4} className="text-center text-md-right">
              <div className="footer-icons">
                <a href="https://link_to_page1.com" target="_blank" rel="noopener noreferrer">
                  <img src="/src/components/layout/header/img/01-X.svg" alt="Icon 1" className="footer-icon" />
                </a>
                <a href="https://link_to_page2.com" target="_blank" rel="noopener noreferrer">
                  <img src="/src/components/layout/header/img/02-Telegram.svg" alt="Icon 2" className="footer-icon" />
                </a>
                <a href="https://link_to_page3.com" target="_blank" rel="noopener noreferrer">
                  <img src="/src/components/layout/header/img/03-LinkedIn.svg" alt="Icon 3" className="footer-icon" />
                </a>
              </div>
              <div className="footer-contact ">
                <p className='position'>Contact us</p>
                <p className='position2'>uve.web3@gmail.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    )



}
export { Footer };