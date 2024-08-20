import React, { useState, useEffect, useContext } from 'react';
import "./customevent.css";
import { useContractUtils } from '@/app/hooks';
import { dAppContext } from '@/Context/dappContext';
import { useAccount } from '@gear-js/react-hooks';
import { Container, Row, Col, Image, ButtonGroup, Dropdown, Badge, Button } from 'react-bootstrap';
import { Footer } from '@/components/ExampleComponents/Footer/Footer';

type Props = {
  isAccountVisible: boolean;
};

function HomeEvent() {
  const { account } = useAccount();
  const { 
    currentVoucherId,
    setCurrentVoucherId,
    setSignlessAccount
  } = useContext(dAppContext);
  const { readState } = useContractUtils();

  const [pageSignlessMode, setPageSignlessMode] = useState(false);
  const [voucherModeInPolkadotAccount, setVoucherModeInPolkadotAccount] = useState(false);
  const [contractState, setContractState] = useState("");

  const [notifications, setNotifications] = useState(3);

  useEffect(() => {
    if (!account) {
      setPageSignlessMode(true);
    } else {
      setPageSignlessMode(false);
    }
    if (setCurrentVoucherId) setCurrentVoucherId(null);
  }, [account]);

  return (
    <div className="create-container">
      <Container 
        className="d-flex flex-column align-items-center text-white m-0 p-0 mw-100 mobile-padding"  
        style={{ backgroundColor: '#111120', border: '2px solid white', overflow: 'hidden', padding: '20px' }}
      >
        <Row className="header-row justify-content-center align-items-center mb-4 mt-4">
          <Col xs={12} md={2} className="text-left">
            <Image src="/src/components/layout/header/img/LogoMKT.svg" width={350} height={300} />
          </Col>
          <Col xs={12} md={8} className="text-start">
            <h1>MKT Community</h1>
          </Col>
          <Col xs={12} md={2} className="text-end border-0 m-0">
            <Dropdown as={ButtonGroup} drop="end">
              <Dropdown.Toggle split variant="" id="dropdown-split-basic" className="custom-dropdown-toggle colorbtndropdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
                {notifications > 1 && (
                  <Badge bg="danger" pill className="ms-2">
                    {notifications}
                  </Badge>
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu className="custom-dropdown-menu">
                <Dropdown.Item href="#/action-1" className="custom-dropdown-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"></path>
                  </svg>
                  Notifications
                  <Badge bg="danger" pill className="ms-2">
                    {notifications}
                  </Badge>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2" className="custom-dropdown-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                  </svg>
                  Uvers
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="custom-dropdown-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-power" viewBox="0 0 16 16">
                    <path d="M7.5 1v7h1V1z"/>
                    <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"/>
                  </svg>
                  Log out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        {/* Sección de información de eventos y botones */}
        <Row className="event-info mb-4">
          <Col xs={12} md={12} className="event-created-info mb-3">
            <h2 className=' desktop-margin' >Event created: 0</h2>
          </Col>
          <Col xs={12} md={12} className="d-flex justify-content-end align-items-center">
            <Button variant="outline-light" className="how-to-create-event-btn d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" className="bi bi-question-circle me-2" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
              </svg>How to create a event?
              
            </Button>
            <Button variant="danger" className="create-event-btn ms-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1-.5-.5z"/>
              </svg>
              Create a event
            </Button>
          </Col>
        </Row>

        {/* Barra de búsqueda */}
        <Row className="search-bar-container mb-4 justify-content-center">
          <Col xs={12} md={8}>
            <div className="search-bar position-relative">
              <input type="text" placeholder="Search events..." className="search-input" />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search search-icon" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.397h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </div>
          </Col>
        </Row>

        {/* Imagen de placeholder */}
        <Row className="justify-content-center m-5 pb-5">
          <Col xs={12} md={4} className='mb-5 pb-5'>
            <Image src="/src/components/layout/header/img/04.png" alt="Placeholder" className="placeholder-image" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default HomeEvent;
