import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <Container
      width="60%"
      className="mt-3 justify-content-center align-text-center"
    >
      <Row className="row justify-content-center mt-3">
        <Button href="/signup" variant="success">
          Sign Up for Free
        </Button>
      </Row>
    </Container>
  );
}
