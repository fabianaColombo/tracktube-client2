import React from "react";
import { Button } from "react-bootstrap";

export default function LoggedOut() {
  return (
    <>
      <Button href="/login" variant="dark">
        Log in here!
      </Button>
    </>
  );
}
