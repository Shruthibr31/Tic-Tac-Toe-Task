# Tic-Tac-Toe Applicaton

Tech-Owner- Shruthi BR

-- Stack - React (Functional Component + Hooks)

-- Styling - CSS + Bootstrap


# Apllication Details

This is a simple Tic-Tac-Toe game built with React where User can play against the system. The system has some intelligence, including diagonal checks. The game also includes a restart option.

# Getting Started

Follow the instructions below to set up and run the Tic-Tac-Toe game on local machine.

# Prerequisites

Make sure have [Node.js] and [npm] installed on local machine.

# Installation

1. Clone the repository:

  `bash
  git clone https://github.com/Shruthibr31/Tic-Tac-Toe-Task.git

cd Tic-Tac-Toe-Task

npm install

npm start


# Game Logic
The game board consists of a 3x3 grid of squares. Each square can be empty, filled with an "X" or filled with an "O"

# Players
Player (User): User play as "X"
System: The system plays as "O"

# Winning
The game declares a winner if one player completes a row, column, or diagonal with their symbol. If the board is full and no player has won, the game ends in a draw.

# System Intelligence
The system makes intelligent moves by:
Trying to win the game if it has two in a row.
Trying to block the player from winning if the player has two in a row.
Making diagonal moves if available.
Otherwise, making a random move.
Restarting the Game
User can restart the game at any time by clicking the "Restart Game" button.

# Folder Structure
The project is organized with the following folder structure:

src/

components/

Board.js: React component for rendering the game board.

Tile.js: React component for rendering individual squares.

DashBoard.js: React component managing the game state, player moves, and system intelligence.

App.js: Main React component rendering the game.
