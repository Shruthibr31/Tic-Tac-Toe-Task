import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import Board from "./Board";
import "../App.css";

const DashBoard = () => {
  const initialHistory = [{ squares: Array(9).fill(null) }];
  const [history, setHistory] = useState(initialHistory);
  const [stepNumber, setStepNumber] = useState(0);
  const xIsNext = stepNumber % 2 === 0;
  const current = history[stepNumber];

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

  const winner = calculateWinner(current.squares);

  useEffect(() => {
    if (!xIsNext && !winner) {
      const timer = setTimeout(() => {
        const availableMoves = current.squares
          .map((square, index) => (square === null ? index : null))
          .filter((index) => index !== null);

        const randomMove =
          availableMoves[Math.floor(Math.random() * availableMoves.length)];

        if (randomMove !== undefined) {
          const newHistory = history.slice(0, stepNumber + 1);
          const currentSquares = current.squares.slice();
          currentSquares[randomMove] = 'O';

          setHistory(newHistory.concat([{ squares: currentSquares }]));
          setStepNumber(newHistory.length);
        }
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [xIsNext, winner, history, current.squares, stepNumber]);

 
  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const currentSquares = current.squares.slice();

    if (winner || currentSquares[i]) {
      return;
    }

    currentSquares[i] = xIsNext ? 'X' : 'O';
    setHistory(newHistory.concat([{ squares: currentSquares }]));
    setStepNumber(newHistory.length);
  };

  const resetGame = () => {
    setHistory(initialHistory);
    setStepNumber(0);
  };
  
  const status = winner
  ? `Winner: ${winner}`
  : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <Card border="primary" className="text-center" style={{ width: "28rem" }}>
      <Card.Body>
        <Card.Header as="h2">Lets Play Tic-Tac-Toe</Card.Header>
        <Card.Header as="h5">{status}</Card.Header>
        <div className="dash-board-body">
          <Board squares={current.squares} onClick={handleClick} />
        </div>
        <Button onClick={resetGame} variant="primary">
          Restart Game
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DashBoard;
