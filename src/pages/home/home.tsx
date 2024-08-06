import React, { useEffect, useState, useContext } from 'react';
import "./examples.css";
import "./custom.css";
import { useContractUtils } from '@/app/hooks';
import { dAppContext } from '@/Context/dappContext';
//import { Button } from '@/components/ui/button';
import { useAccount } from '@gear-js/react-hooks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import {AccountInfo} from './../../../src/components/layout/header/account-info'
import { Footer } from "@/components/ExampleComponents/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


type Props = {
  isAccountVisible: boolean;
};

const currentYear = new Date().getFullYear();
function Home () {
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

  useEffect(() => {
    if (!account) {
      setPageSignlessMode(true);
    } else {
      setPageSignlessMode(false);
    }
    if (setCurrentVoucherId) setCurrentVoucherId(null);
  }, [account]);

  return (
    <Container className="text-center text-white m-0 p-0 mw-100" id='containerPersonalizado' style={{backgroundColor:'#111120', border: '2px solid white', overflow: 'hidden'}}>
      <h1 className="display-4 font-weight-bold mt-5">Empower your knowledge<br />and monetize your impact</h1>
      <p className="lead">Create, tokenize and monetize your educational workshops.<br />Transform education now!</p>
      
      <Row className="justify-content-center" >
        <Col xs="auto">
          <div className="accoun-info-wrapper">
            <AccountInfo />
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={12} className="">
          <img src="/src/components/layout/header/img/Eslogan2.png" className="img-fluid mx-auto d-block" alt="Image 2" />
        </Col>
      </Row>

      <div style={{border: '2px solid white', marginTop: '20px'}}>
        <h1 className="display-4 font-weight-bold">Upcoming events<br />stay tuned!</h1>
        <p className="lead">Meet the communities that are creating and monetizing<br />their content</p>
        
        <Row className="justify-content-center" style={{ marginBottom: '20px'}}>
        <Col md={4} className="">
          <Carousel interval={null}>
            <Carousel.Item>
              <Row>
                <Col md={6}>
                  <img
                    className="d-block w-100"
                    src="/src/components/layout/header/img/cHYPEWeb3Marketing.png"
                    alt="First slide"
                  />
                </Col>
                <Col md={6}>
                  <img
                    className="d-block w-100"
                    src="/src/components/layout/header/img/Marcapersonalweb3linkedin.png"
                    alt="Second slide"
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col md={6}>
                  <img
                    className="d-block w-100"
                    src="/src/components/layout/header/img/EventoToulouse.png"
                    alt="Third slide"
                  />
                </Col>
                <Col md={6}>
                  <img
                    className="d-block w-100"
                    src="/src/components/layout/header/img/Eslogan2.png"
                    alt="Fourth slide"
                  />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      </div>
      
      <div style={{border: '1px solid white'}}>
        <h1 className="display-4 font-weight-bold">Features</h1>
        <p className="lead">UVE creates customized educational spaces and tokenizes<br />educational content for monetization.</p>
        <Row className="justify-content-center">
          <Col md={2} className="">
            <img src="/src/components/layout/header/img/Icon01.png" className="img-fluid mx-auto d-block w-75" alt="Icon 1" id='icon' />
            <p className="lead">Personalized learning spaces</p>
          </Col>
          <Col md={2} className="">
            <img src="/src/components/layout/header/img/Icon02.png" className="img-fluid mx-auto d-block w-75" alt="Icon 2" id='icon' />
            <p className="lead">Integrated Tokenization</p>
          </Col>
          <Col md={2} className="">
            <img src="/src/components/layout/header/img/Icon03.png" className="img-fluid mx-auto d-block w-75" alt="Icon 3" id='icon' />
            <p className="lead">Decentralized Monetization</p>
          </Col>
        </Row>
      </div>

    
    <Footer/>

    </Container>
  );
}

export { Home };
