import React from 'react';
import { Button } from '@/components/ui/button';
import { AccountInfo } from '../././../header/account-info';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SectionOne = ({ title, description, buttonText, imageUrl }) => {
  return (
    <>
      <h1 className="display-4 font-weight-bold">{title}</h1>
      <p className="lead">{description}</p>
      <Button variant="primary" size="lg" className="my-4" style={{ backgroundColor: '#FF007A', border: 'none' }}>{buttonText}</Button>
      <Row className="justify-content-center">
        <Col md={12} className="">
          <img src={imageUrl} className="img-fluid mx-auto d-block" alt="Image" />
        </Col>
      </Row>
    </>
  );
}

export  {SectionOne};
