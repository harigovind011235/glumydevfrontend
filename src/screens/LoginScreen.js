import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Header from "../components/Header";

function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <>
      <Header />
      <Container className="d-flex justify-content-center mt-4">
        <Row>
          <Col>
            <h1 className="text-center my-4">Login</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>

              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "14vh" }}
              >
                <div className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    onSubmit={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginScreen;
