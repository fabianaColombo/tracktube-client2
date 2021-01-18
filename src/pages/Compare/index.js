import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import GraphSubscribersCount from "../../components/GraphSubscribersCount";

import { fetchExplore, saveToFavorite } from "../../store/explore/actions";
import { selectExplore } from "../../store/explore/selectors";

export default function Compare() {
  const initialStateIds = {
    id1: "UCJ12sWRTfduf-iBDHPNxbww",
    id2: "UCMOB6uDg7e-h8OuCw8dK2_Q",
    id3: "UCthbIFAxbXTTQEC7EcQvP1Q",
  };
  const [ids, setIds] = useState(initialStateIds);
  // const [id2, setId2] = useState("");
  // const [id3, setId3] = useState("");
  // const [series, setSeries] = useState([
  //   {
  //     name: "Example channel 1",
  //     data: [{ x: 1610900781000, y: 1200 }],
  //   },
  //   {
  //     name: "Example channel 2",
  //     data: [{ x: 1610900781000, y: 110 }],
  //   },
  //   {
  //     name: "Example channel 3",
  //     data: [{ x: 1610900781000, y: 1000 }],
  //   },
  // ]);

  const onChangeHandler = (event) => {
    setIds({ ...ids, [event.target.name]: event.target.value });
  };

  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    console.log("hello");
    event.preventDefault();

    dispatch(fetchExplore(ids.id1, ids.id2, ids.id3));

    setIds(initialStateIds);
  };

  // const selectExploreData = useSelector(selectExplore);
  // const exploreIds = selectExploreData.map((channel) => ({
  //   youtubeId: channel.id[0],
  // }));
  //console.log("this is ids from explore", exploreIds);

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
