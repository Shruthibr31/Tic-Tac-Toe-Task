import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Board from "./Board";
import "../App.css";

const DashBoard = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  const handleClick = (i) => {
    if (winner || squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = player ? "X" : "O";
    setSquares(newSquares);
    setPlayer(!player);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setPlayer(true);
  };
  const status = winner
    ? `Winner is : ${winner}`
    : squares.every((square) => square !== null)
    ? "Draw !"
    : `Player : ${player ? "X" : "O"}`;

  return (
    <Card border="primary" className="text-center" style={{ width: "28rem" }}>
      <Card.Body>
        <Card.Header as="h2">Lets Play Tic-Tac-Toe</Card.Header>
        <Card.Header as="h5">{status}</Card.Header>
        <div className="dash-board-body">
          <Board squares={squares} onClick={handleClick} />
        </div>
        <Button onClick={resetGame} variant="primary">
          Restart Game
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DashBoard;
