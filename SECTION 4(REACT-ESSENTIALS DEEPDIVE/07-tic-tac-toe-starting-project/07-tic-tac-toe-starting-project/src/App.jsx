import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";
import { winning_Combinations } from "./components/Winning_Combinations";
import GameOver from "./components/GameOver";

const initialgame = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns) {
  let currrentplay = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currrentplay = "O";
  }

  return currrentplay;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialgame.map((innerArray) => [...innerArray])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function derivewinner(gameBoard, players) {
  let winner;
  for (const combination of winning_Combinations) {
    const firstsquaresymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondsquaresymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdsquaresymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstsquaresymbol &&
      firstsquaresymbol === secondsquaresymbol &&
      firstsquaresymbol === thirdsquaresymbol
    ) {
      winner = players[firstsquaresymbol];
    }
  }
  return winner;
}

function App() {
  const [playername, setplayername] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);

  const activeplayer = derivedActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = derivewinner(gameBoard, playername);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleselectsquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const activeplayer = derivedActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activeplayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setplayername((prevplayers) => ({
      ...prevplayers,
      [symbol]: newName,
    }));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialname="Player 1"
            symbol="X"
            isActive={activeplayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialname="Player 2"
            symbol="O"
            isActive={activeplayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectedsquare={handleselectsquare} board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
