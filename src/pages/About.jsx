import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <Container className="my-5 text-center">
      <h1>About PetPal</h1>
      <p>
        PetPal is a community-driven platform that connects pets with loving homes.
        Our mission is to help every pet find a safe and happy environment.
      </p>
      <Button variant="secondary" onClick={() => navigate(-1)}>
        ← Go Back
      </Button>
    </Container>
  );
};

export default About;
