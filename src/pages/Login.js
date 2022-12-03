import React from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";

const Login = () => {
  return (
    <Container className=" d-flex flex-row justify-content-center">
      <div className="login-container">
        <Form className="mx-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Alert variant="primary">This is a primary alert—check it out!</Alert>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;

