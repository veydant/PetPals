import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent: ' + message);
    setMessage('');
  };

  return (
    <Container className="my-5 text-center">
      <h1>Contact Us</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary">Send</Button>{' '}
        <Button variant="secondary" onClick={() => navigate(-1)}>← Go Back</Button>
      </Form>
    </Container>
  );
};

export default Contact;
