import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import GraphSubscribersCount from "../../components/GraphSubscribersCount";

export default function Compare() {
  return (
    <>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="YouTube ID" />
            </Col>
            vs
            <Col>
              <Form.Control placeholder="YouTube ID" />
            </Col>
            vs
            <Col>
              <Form.Control placeholder="YouTube ID" />
            </Col>
            <Button variant="danger">Explore!</Button>
          </Row>
        </Form>
      </Container>

      <Container width="90%" className="mt-5">
        <GraphSubscribersCount />
      </Container>
    </>
  );
}
