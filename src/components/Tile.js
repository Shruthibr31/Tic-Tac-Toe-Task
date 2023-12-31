import React from "react";
import { Button } from "react-bootstrap";

const Tile = ({ value, onClick }) => (
  <Button className="square" onClick={onClick}>
    {value}
  </Button>
);

export default Tile;
