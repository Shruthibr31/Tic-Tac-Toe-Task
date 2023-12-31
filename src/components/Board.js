import React from "react";
import Tile from "./Tile";
import '../App.css'

const Board = ({ squares, onClick }) => {
  const renderSquare = (i) => (
    <Tile value={squares[i]} onClick={() => onClick(i)} />
  );

  return (
    <div className="board">
      {Array.from({ length: 3 }, (_, row) => (
        <div key={row} className="board-row">
          {Array.from({ length: 3 }, (_, col) => renderSquare(row * 3 + col))}
        </div>
      ))}
    </div>
  );
};

export default Board;
