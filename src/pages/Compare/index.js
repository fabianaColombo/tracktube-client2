import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import GraphSubscribersCount from "../../components/GraphSubscribersCount";

import {
  fetchExplore,
  saveToFavorite,
  favoriteCheck,
} from "../../store/explore/actions";
import { selectExplore } from "../../store/explore/selectors";

export default function Compare() {
  const initialStateIds = {
    id1: "",
    id2: "",
    id3: "",
  };
  const [ids, setIds] = useState(initialStateIds);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(favoriteCheck());
  }, [dispatch]);

  const onChangeHandler = (event) => {
    setIds({ ...ids, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    console.log("hello");
    event.preventDefault();

    dispatch(fetchExplore(ids));

    //setIds(initialStateIds);
  };

  const selectExploreIds = useSelector(selectExplore);
  console.log("this is select explore", selectExploreIds);

  const save = () => {
    console.log("this is id1 in save function", ids.id1);
    dispatch(saveToFavorite(ids.id1));
    dispatch(saveToFavorite(ids.id2));
    dispatch(saveToFavorite(ids.id3));
  };

  return (
    <>
      <Container fluid>
        <Form as={Row} inline className="justify-content-md-center">
          <Form.Group>
            <Col>
              <Form.Control
                value={ids.id1}
                placeholder="YouTube ID"
                name="id1"
                onChange={onChangeHandler}
                required
              />
            </Col>
            vs
            <Col>
              <Form.Control
                value={ids.id2}
                placeholder="YouTube ID"
                name="id2"
                onChange={onChangeHandler}
                required
              />
            </Col>
            vs
            <Col>
              <Form.Control
                value={ids.id3}
                placeholder="YouTube ID"
                name="id3"
                onChange={onChangeHandler}
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
        <Button variant="success" onClick={save}>
          SAVE AND TRACK
        </Button>
        <p>
          Save channels and start tracking their number of subscribers over time
          for better analysis of your competitors.
        </p>
      </Container>
    </>
  );
}
