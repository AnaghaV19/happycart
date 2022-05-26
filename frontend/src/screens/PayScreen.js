import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function SignupScreen() {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';
  
    const [name, setName] = useState('');
    const [email, setcn] = useState('');
    const [password, setcvv] = useState('');
    const [confirmPassword, setexp] = useState('');
  
   
    return (
      <Container className="small-container">
        <Helmet>
          <title>Payment details</title>
        </Helmet>
        <h1 className="my-3">Payment details</h1>
        <Form >
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name on the card</Form.Label>
            <Form.Control onChange={(e) => setName(e.target.value)} required />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="cn">
            <Form.Label>Card No.</Form.Label>
            <Form.Control
              type="integer"
              required
              onChange={(e) => setcn(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cvv">
            <Form.Label>CVV</Form.Label>
            <Form.Control
              type="integer"
              required
              onChange={(e) => setcvv(e.target.value)}
            />
            <Form.Group className="mb-3" controlId="exp">
              <Form.Label>Expiry date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setexp(e.target.value)}
                required
              />
            </Form.Group>
          </Form.Group>
          <div className="mb-3">
            <Button  onClick={() => {
      alert('Payment Successful')
      navigate('/');
    }}>Pay now</Button>
          </div>
         
        </Form>
      </Container>
    );
  }

