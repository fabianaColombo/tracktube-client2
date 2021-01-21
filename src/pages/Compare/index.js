import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import GraphSubscribersCount from "../../components/GraphSubscribersCount";

import { fetchExplore, saveToFavorite } from "../../store/explore/actions";
import { favoriteCheck } from "../../store/exploreFavorites/actions";
import { selectExplore } from "../../store/explore/selectors";
import { selectExploreFavorites } from "../../store/exploreFavorites/selectors";

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
    //console.log("hello");
    event.preventDefault();

    dispatch(fetchExplore(ids));

    //setIds(initialStateIds);
  };

  //const selectExploreIds = useSelector(selectExplore);
  //console.log("this is select explore", selectExploreIds);

  const save = () => {
    console.log("this is id1 in save function", ids.id1);
    dispatch(saveToFavorite(ids.id1));
    dispatch(saveToFavorite(ids.id2));
    dispatch(saveToFavorite(ids.id3));
  };

  const selectFavoritesCheck = useSelector(selectExploreFavorites);
  console.log("favorite check", selectFavoritesCheck);

  const selectExploreCheck = useSelector(selectExplore);
  console.log("explore check", selectExploreCheck);

  const favoriteExploreCheck = () => {
    console.log("hello");
    if (selectFavoritesCheck.length > 0 && selectExploreCheck.length > 0) {
      return selectExploreCheck;
    }
    if (selectFavoritesCheck.length > 0 || selectExploreCheck.length === 0) {
      return selectFavoritesCheck;
    }
    if (selectFavoritesCheck.length === 0 && selectExploreCheck.length === 0) {
      return selectExploreCheck;
    } else {
      return selectExploreCheck;
    }
  };

  const saveButtonState =
    selectFavoritesCheck.length === 0 ? (
      <>
        <Row className="row justify-content-center mt-3">
          <Button variant="success" onClick={save}>
            SAVE AND TRACK
          </Button>
        </Row>
        <Row className="row justify-content-center mt-3">
          <p>
            Save channels and start tracking their number of subscribers over
            time for better analysis of your competitors.
          </p>
        </Row>
      </>
    ) : (
      <>
        <Row className="row justify-content-center mt-3">
          <Button variant="danger" onClick={save}>
            UPDATE AND RESET
          </Button>
        </Row>
        <Row className="justify-content-center mt-3">
          <p>
            Update channels and we will overwrite your previously saved
            channels. This action will also affect your channel options on the
            Stats page.
            <br />
            Feel free to explore more channels, we won't stop tracking your
            favorite channels unless you decide to 'update and reset'.
            <br />
            To go back to your saved channels graph with historical data, just
            refresh the page.
          </p>
        </Row>
      </>
    );

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
      {selectFavoritesCheck.length === 0 && selectExploreCheck.length === 0 ? (
        <Row className="row justify-content-center mt-5">
          <h3>Start exploring!</h3>
        </Row>
      ) : (
        <>
          <Container width="80%" className="mt-3">
            <GraphSubscribersCount series={favoriteExploreCheck()} />
          </Container>

          {saveButtonState}
        </>
      )}
    </>
  );
}
