import React, { useState, useEffect, useContext } from 'react';
import "./customhomechannel.css";
import { useContractUtils } from '@/app/hooks';
import { dAppContext } from '@/Context/dappContext';
import { useAccount } from '@gear-js/react-hooks';
import { Container, Row, Col, Image, ButtonGroup, Dropdown, Badge, Carousel } from 'react-bootstrap';
import { Footer } from '@/components/ExampleComponents/Footer/Footer';
import DonutChart from '@/components/DonutChart/DonutChart';

type Props = {
  isAccountVisible: boolean;
};

function HomeChannel() {
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

  // Usa el estado para manejar el número de notificaciones
  const [notifications, setNotifications] = useState(0); // Inicializado con la constante
  
  // Opcional: Funciones para modificar el número de notificaciones en el futuro
  const addNotification = () => {
    setNotifications(notifications + 1);
  };

  const clearNotifications = () => {
    setNotifications(0);
  };

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
        <Row className="justify-content-center align-items-center mb-4 mt-4">
          <Col xs={2} className="text-left">
            <Image src="/src/components/layout/header/img/LogoMKT.svg" width={200} height={200} />
          </Col>
          <Col xs={8} className="text-start">
            <h1 className=''  >Welcome to MKT Community</h1>
          </Col>
          <Col xs={2} className="text-end border-0 m-0">
          
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

        <div className="home-channel-container gdona">
            <Row className="justify-content-center">
                <Col md={12} className="mb-4 align-items-end">
                    <h2 className='mt-4 ml-5' >Uvers Progress</h2>
                    <DonutChart />
                </Col>
            </Row>
        </div>

        <div className="top-content-container mb-5 pb-5">
          <h2 className="top-content-title mb-5">Top content</h2>
          <div className="carousel-wrapper">
            <Carousel interval={null} indicators={false} prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" />} nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" />}>
              <Carousel.Item>
                <Row className="justify-content-center align-items-center">
                  <Col xs={12} md={6} lg={5} className="text-center">
                    <Image
                      className="d-block w-100 carousel-image"
                      src="/src/components/layout/header/img/cHYPEWeb3Marketing.png"
                      alt="First slide"
                    />
                    <div className="carousel-info">
                      <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart" viewBox="0 0 16 16">
                        <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
                      </svg>200</span>
                      <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-square-text" viewBox="0 0 16 16">
                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                      </svg>10</span> 
                      <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                      </svg>100</span> 
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={5} className="text-center">
                    <Image
                      className="d-block w-100 carousel-image"
                      src="/src/components/layout/header/img/Marcapersonalweb3linkedin.png"
                      alt="Second slide"
                    />
                    <div className="carousel-info">
                      <span>200</span> <i className="fas fa-chart-line"></i>
                      <span>10</span> <i className="fas fa-comment"></i>
                      <span>100</span> <i className="fas fa-thumbs-up"></i>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="justify-content-center align-items-center">
                  <Col xs={12} md={6} lg={5} className="text-center">
                    <Image
                      className="d-block w-100 carousel-image"
                      src="/src/components/layout/header/img/EventoToulouse.png"
                      alt="Third slide"
                    />
                    <div className="carousel-info">
                      <span>200</span> <i className="fas fa-chart-line"></i>
                      <span>10</span> <i className="fas fa-comment"></i>
                      <span>100</span> <i className="fas fa-thumbs-up"></i>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={5} className="text-center">
                    <Image
                      className="d-block w-100 carousel-image"
                      src="/src/components/layout/header/img/Eslogan2.png"
                      alt="Fourth slide"
                    />
                    <div className="carousel-info">
                      <span>200</span> <i className="fas fa-chart-line"></i>
                      <span>10</span> <i className="fas fa-comment"></i>
                      <span>100</span> <i className="fas fa-thumbs-up"></i>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

      </Container>
      <Footer />
    </div>
  );
}

export default HomeChannel;
