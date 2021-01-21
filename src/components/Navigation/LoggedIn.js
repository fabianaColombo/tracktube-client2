import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";

export default function LoggedIn() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <Nav.Item style={{ padding: ".5rem 1rem" }}>
        <b>Logged In as: </b>
        {user.name}
      </Nav.Item>
      <Button
        variant="dark"
        onClick={() => {
          dispatch(logOut());
          history.push("/");
        }}
      >
        Log out
      </Button>
    </>
  );
}
