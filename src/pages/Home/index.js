import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <>
      <Container
        width="60%"
        className="mt-3 justify-content-center align-text-center"
      >
        <Row className="row justify-content-center mt-3 mb-3">
          <Button href="/signup" variant="success" className="signup-home-cta">
            Sign Up for Free
          </Button>
        </Row>
      </Container>
      <Container
        width="100%"
        align="center"
        className="mt-3 justify-content-center"
      >
        <iframe
          title="explainer video on Home Page"
          width="80%"
          height="500px"
          src="https://www.youtube.com/embed/6P3Yol_9dDs"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Container>
    </>
  );
}
