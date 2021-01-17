import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import GraphSubscribersCount from "../../components/GraphSubscribersCount";

import { fetchExplore } from "../../store/explore/actions";
import { selectExplore } from "../../store/explore/selectors";

export default function Compare() {
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");
  const [id3, setId3] = useState("");
  // const [series, setSeries] = useState([
  //   {
  //     name: "channel 1",
  //     data: [{ x: 1610900781000, y: 1200 }],
  //   },
  //   {
  //     name: "channel 2",
  //     data: [{ x: 1610900781000, y: 110 }],
  //   },
  //   {
  //     name: "channel 3",
  //     data: [{ x: 1610900781000, y: 1000 }],
  //   },
  // ]);

  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    console.log("hello");
    event.preventDefault();

    dispatch(fetchExplore(id1, id2, id3));

    setId1("");
    setId2("");
    setId3("");
  };

  return (
    <>
      <Container fluid>
        <Form as={Row} inline className="justify-content-md-center">
          <Form.Group>
            <Col>
              <Form.Control
                value={id1}
                placeholder="YouTube ID"
                type="id1"
                onChange={(event) => setId1(event.target.value)}
                required
              />
            </Col>
            vs
            <Col>
              <Form.Control
                value={id2}
                placeholder="YouTube ID"
                type="id2"
                onChange={(event) => setId2(event.target.value)}
                required
              />
            </Col>
            vs
            <Col>
              <Form.Control
                value={id3}
                placeholder="YouTube ID"
                type="id3"
                onChange={(event) => setId3(event.target.value)}
                required
              />
            </Col>
          </Form.Group>
          <Button type="submit" variant="danger" onClick={onSubmitHandler}>
            Explore!
          </Button>
        </Form>
      </Container>

      <Container width="90%" className="mt-5">
        <GraphSubscribersCount series={useSelector(selectExplore)} />
      </Container>

      <Container style={{ textAlign: "center" }} className="mt-5">
        <Button variant="success">SAVE AND TRACK</Button>
        <p>
          Save channels and start tracking their number of subscribers over time
          for better analysis of your competitors.
        </p>
      </Container>
    </>
  );
}
