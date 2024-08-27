import React, { useState } from 'react';
import "./customuser.css";
import { Container, Row, Col, Form, Image, Button, Carousel } from 'react-bootstrap';
import { Footer } from '@/components/ExampleComponents/Footer/Footer';

function CreateUser() {
  const [selectedImage, setSelectedImage] = useState<string>("/src/components/layout/header/img/01.png");

  const images = [
    "/src/components/layout/header/img/02.png",
    "/src/components/layout/header/img/03.png",
    "/src/components/layout/header/img/04nft.png",
    "/src/components/layout/header/img/05.png",
    "/src/components/layout/header/img/06.png",
    "/src/components/layout/header/img/07.png",
    "/src/components/layout/header/img/08.png",
    // Agrega más imágenes según sea necesario
  ];

  // Control del índice actual
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <div className="create-container">
      <Container
        className="d-flex flex-column align-items-center text-white m-0 p-0 mw-100 mobile-padding"
        style={{ backgroundColor: '#111120', border: '2px solid white', overflow: 'hidden', padding: '20px' }}
      >
        <h5 className="display-3 font-weight-bold">Set up your User</h5>

        <Row className="mt-4 mb-4 justify-content-center align-items-center general">
          <Col xs="auto" className="text-left m-0 svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
            </svg>
          </Col>

          <Col xs="auto" className="text-left m-0">
            <h3 className="mb-0">General</h3>
          </Col>
        </Row>

        <Form onSubmit={(event) => event.preventDefault()} style={{ width: '100%', maxWidth: '600px' }}>
          <Form.Group controlId="formNameChannel" className="mb-3">
            <Form.Label><h4>Name</h4></Form.Label>
            <Form.Text className="text-left text-white spacef">
              <Form.Control type="text" placeholder="" className="bg-dark text-white border-secondary text-center font-weight-bold" />
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formAboutChannel" className="mb-3">
            <Form.Label><h4>About me</h4></Form.Label>
            <Form.Text className="text-left text-white spacef">
              <Form.Control as="textarea" rows={3} placeholder="" className="bg-dark text-white border-secondary text-center font-weight-bold" />
            </Form.Text>
          </Form.Group>

          {/* Sección de NFT con Carrusel */}
          <Form.Group controlId="formNFT" className="mb-3 mt-5 text-left">
            <Form.Label><h4>NFT</h4></Form.Label>
            <Carousel
              activeIndex={currentIndex}
              onSelect={handleSelect}
              indicators={false}
              interval={null}
              slide={false}
              className="d-none d-md-block"
            >
              {images.map((_, index) => (
                <Carousel.Item key={index}>
                  <Row className="justify-content-center text-center">
                    {[0, 1, 2].map((offset) => {
                      const imgIndex = (currentIndex + offset) % images.length;
                      return (
                        <Col key={imgIndex} xs={4} md={3} className="d-flex justify-content-center">
                          <Image src={images[imgIndex]} rounded className="nft-image" />
                        </Col>
                      );
                    })}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>

            {/* Pantalla pequeña: una imagen por item */}
            <Carousel className="d-md-none">
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <Row className="justify-content-center text-center">
                    <Col xs={12} className="d-flex justify-content-center">
                      <Image src={image} rounded className="nft-image" />
                    </Col>
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>

            <Form.Text className="text-center text-white spacef">
              <h6>Select your personalized NFT</h6>
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formCommunityLink" className="mb-3 text-left">
            <Form.Label><h4>Telegram or Discord Handle</h4></Form.Label>
            <Form.Text className="text-left text-white spacef">
              <Form.Control type="text" placeholder="Connect to Telegram or Discord" className="bg-dark text-white border-secondary text-center font-weight-bold" />
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formSocialLinks" className="mb-3 text-left">
            <Form.Label><h4>Social Links</h4></Form.Label>
            <Form.Text className="text-left text-white spacef">
              <Button variant="primary" onClick={() => alert('Share on X')} className="colobutton">
                <div className="buttonx">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865zM12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                  </svg>
                  Connect to X
                </div>
              </Button>
            </Form.Text>
          </Form.Group>

          <Row className="justify-content-center">
            <Col xs="auto">
              <Button variant="success" type="submit" className="w-100 mb-5 mt-5 boton">
                Update
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <Footer />
    </div>
  );
}

export { CreateUser };
