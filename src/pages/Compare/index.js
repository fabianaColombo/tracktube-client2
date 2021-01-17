import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import GraphSubscribersCount from "../../components/GraphSubscribersCount";

import { fetchExplore } from "../../store/explore/actions";
import { selectExploreData } from "../../store/explore/selectors";

export default function Compare() {
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");
  const [id3, setId3] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    console.log("hello");
    event.preventDefault();

    dispatch(fetchExplore(id1, id2, id3));

    setId1("");
    setId2("");
    setId3("");
  };

  // const explore = useSelector(selectExploreData);
  // console.log("this is data from explore", explore);

  return (
    <>
      <Container>
        <Form as={Row} inline>
          <Form.Group>
            <Col>
              <Form.Control
                value={id1}
                placeholder="YouTube ID"
                type="id1"
                onChange={(event) => setId1(event.target.value)}
              />
            </Col>
            vs
            <Col>
              <Form.Control
                value={id2}
                placeholder="YouTube ID"
                type="id2"
                onChange={(event) => setId2(event.target.value)}
              />
            </Col>
            vs
            <Col>
              <Form.Control
                value={id3}
                placeholder="YouTube ID"
                type="id3"
                onChange={(event) => setId3(event.target.value)}
              />
            </Col>
          </Form.Group>
          <Button type="submit" variant="danger" onClick={onSubmitHandler}>
            Explore!
          </Button>
        </Form>
      </Container>

      <Container width="90%" className="mt-5">
        <GraphSubscribersCount />
      </Container>
    </>
  );
}
