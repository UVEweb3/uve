import React, { useEffect, useState, useContext, ChangeEvent } from 'react';
import "./custom.css";
import { useContractUtils } from '@/app/hooks';
import { dAppContext } from '@/Context/dappContext';
import { useAccount } from '@gear-js/react-hooks';
import { Container, Row, Col, Form, Image, Button } from 'react-bootstrap';
import { Footer } from '@/components/ExampleComponents/Footer/Footer';

type Props = {
  isAccountVisible: boolean;
};

const handleTwitterShare = () => {
  const url = 'https://yourwebsite.com'; // URL que deseas compartir
  const text = 'Check out this amazing content on our website!'; // Texto que deseas compartir
  const hashtags = 'YourHashtag'; // Hashtags opcionales
  const via = 'YourTwitterHandle'; // Tu usuario de Twitter opcional

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}&hashtags=${encodeURIComponent(hashtags)}&via=${encodeURIComponent(via)}`;

  window.open(twitterUrl, '_blank');
};

const currentYear = new Date().getFullYear();

function Create() {
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

  const [selectedImage, setSelectedImage] = useState<string>("/src/components/layout/header/img/LogoMKT.svg");
  const [selectedBannerImage, setSelectedBannerImage] = useState<string>("/src/components/layout/header/img/Banner MKT Community.jpeg");

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          if (event.target.id === "logo-upload") {
            setSelectedImage(reader.result);
          } else if (event.target.id === "banner-upload") {
            setSelectedBannerImage(reader.result);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <div className="create-container">
      <Container 
        className="d-flex flex-column align-items-center text-white m-0 p-0 mw-100 mobile-padding"  
        style={{ backgroundColor: '#111120', border: '2px solid white', overflow: 'hidden', padding: '20px' }}
      >
        <h5 className="display-3 font-weight-bold">Set up your Channel</h5>
        
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
        
        <Form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
          <Form.Group controlId="formNameChannel" className="mb-3">
            <Form.Label><h4>Name Channel</h4></Form.Label>
            <Form.Text className="text-left text-white spacef">
              <Form.Control type="text" placeholder="" className="bg-dark text-white border-secondary text-center font-weight-bold" />
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formAboutChannel" className="mb-3">
            <Form.Label><h4>About Channel</h4></Form.Label>
            <Form.Text className="text-left text-white spacef">
              <Form.Control as="textarea" rows={3} placeholder="" className="bg-dark text-white border-secondary text-center font-weight-bold" />
            </Form.Text>
          </Form.Group>
          {/* Sección de Logo */}
          <Form.Group controlId="formLogo" className="mb-3 mt-5 text-left">
            <Form.Label><h4>Logo</h4></Form.Label>
            <div className="d-flex flex-column align-items-start text-left">
              <input type="file" accept="image/png, image/jpeg" onChange={handleImageUpload} className="d-none" id="logo-upload" />
              <Image src={selectedImage || "/src/components/layout/header/img/LogoMKT.svg"} rounded style={{ width: '200px', height: '200px' }} />
              <label htmlFor="logo-upload" className="btn btn-logoybanner mb-3 mt-0 text-white">
                Upload Logo
              </label>
              <Form.Text className="text-left text-white spacef">
                <h6>Your image should be at least 200x200px and must be in JPG or PNG format.</h6>
              </Form.Text>
            </div>
          </Form.Group>
          {/* Sección de Banner */}
          <Form.Group controlId="formBanner" className="mb-3 mt-5 text-left">
            <Form.Label><h4>Banner</h4></Form.Label>
            <div className="d-flex flex-column align-items-start text-left">
              <input type="file" accept="image/png, image/jpeg" onChange={handleImageUpload} className="d-none" id="banner-upload" />
              <Image src={selectedBannerImage} rounded style={{ width: '600px', height: 'auto' }} />
              <label htmlFor="banner-upload" className="btn btn-logoybanner mb-3 mt-2 text-break text-white">
                Upload Banner
              </label>
              <Form.Text className="text-left text-white spacef">
                <h6>Your image should be at least 1920x1080px and must be in JPG or PNG format.</h6>
              </Form.Text>
            </div>
          </Form.Group>


          
        {/* fin seccion banner */}

          <Form.Group controlId="formSocialLinks" className="mb-3 text-left">
            <Form.Label><h4>Social Links</h4></Form.Label>
            <Form.Text className="text-left text-white spacef">
              <Button variant="primary" onClick={handleTwitterShare} className="colobutton">
                <div className="buttonx">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865zM12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                  </svg>Connect to X
                  
                </div>
              </Button>
            </Form.Text>
          </Form.Group>
          
          <Form.Group controlId="formCommunityLink" className="mb-3 text-left">
            <Form.Label><h4>Community Link</h4></Form.Label>
            <Form.Text className="text-left text-white spacef">
              <Form.Control type="text" placeholder="Connect to Telegram" className="bg-dark text-white border-secondary text-center font-weight-bold" />
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

export { Create };
