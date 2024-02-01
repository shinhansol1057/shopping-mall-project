import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    console.log("ddd");
    navigate("/");
  };

  return (
    <Container className="login-container">
      <Form onSubmit={(e) => loginUser(e)}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 7, offset: 2 }}>
            <Button
              type="submit"
              variant="danger"
              onClick={()=>setAuthenticate(true)}
            >
              로그인
            </Button>
          </Col>
          <Col sm={3}>
            <Button variant="secondary">회원가입</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;
