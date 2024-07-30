import { Route, Routes, useLocation } from "react-router-dom";
//import { Home } from "./home";
//import { Landing } from "./landing";
import "../../src/pages/home/custom.css";
import { useAccount } from '@gear-js/react-hooks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import {AccountInfo} from './../components/layout/header/account-info'
import { Footer } from "@/components/ExampleComponents/Footer/Footer";

type Props = {
  isAccountVisible: boolean;
};

const currentYear = new Date().getFullYear();

//const routes = [
//  { path: "/", Page: Landing },
 // { path: "/home", Page: Home },
//];
 
function Routing() {
  //const location = useLocation();

  return (
   // <Routes location={location} key={location.pathname}>
    //  {routes.map(({ path, Page }) => (
     //   <Route key={path} path={path} element={<Page />} />
     // ))}
    //</Routes>

<Container className="text-center text-white m-0 p-0 mw-100" id='containerPersonalizado' style={{backgroundColor:'#111120', border: '2px solid white', overflow: 'hidden'}}>
      <h1 className="display-4 font-weight-bold">Empower your knowledge<br />and monetize your impact</h1>
      <p className="lead">Create, tokenize and monetize your educational workshops.<br />Transform education now!</p>
      <AccountInfo /> 
      <Row className="justify-content-center">
        <Col md={12} className="">
          <img src="/src/components/layout/header/img/Eslogan2.png" className="img-fluid mx-auto d-block" alt="Image 2" />
        </Col>
      </Row>

      <div style={{border: '2px solid white', marginTop: '20px'}}>
        <h1 className="display-4 font-weight-bold">Upcoming events<br />stay tuned!</h1>
        <p className="lead">Meet the communities that are creating and monetizing<br />their content</p>
        
        <Row className="justify-content-center" style={{ marginBottom: '20px'}}>
        <Col md={6} className="">
          <Carousel interval={null}>
            <Carousel.Item>
              <Row>
                <Col md={6}>
                  <img
                    className="d-block w-100"
                    src="/src/components/layout/header/img/Eslogan2.png"
                    alt="First slide"
                  />
                </Col>
                <Col md={6}>
                  <img
                    className="d-block w-100"
                    src="/src/components/layout/header/img/Eslogan2.png"
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
                    src="/src/components/layout/header/img/Eslogan2.png"
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
            <img src="/src/components/layout/header/img/Icon01.png" className="img-fluid mx-auto d-block" alt="Icon 1" id='icon' />
            <p className="lead">Personalized learning spaces</p>
          </Col>
          <Col md={2} className="">
            <img src="/src/components/layout/header/img/Icon02.png" className="img-fluid mx-auto d-block" alt="Icon 2" id='icon' />
            <p className="lead">Integrated Tokenization</p>
          </Col>
          <Col md={2} className="">
            <img src="/src/components/layout/header/img/Icon03.png" className="img-fluid mx-auto d-block" alt="Icon 3" id='icon' />
            <p className="lead">Decentralized Monetization</p>
          </Col>
        </Row>
      </div>

    
    <Footer/>

    </Container>


  );
}

export { Routing };
