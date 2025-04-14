// import { useState } from "react";

export default function GameBoard({ onSelectedsquare, board }) {
  //   const [gameBoard, setGameBoard] = useState(initialgame);

  //   function handleselectsquare(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const newGameBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       newGameBoard[rowIndex][colIndex] = activeplayersymbol; // or "O" based on the current player
  //       return newGameBoard;
  //     });

  //     onSelectedsquare();
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playersymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectedsquare(rowIndex, colIndex)}
                  disabled={playersymbol !== null}
                >
                  {playersymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
