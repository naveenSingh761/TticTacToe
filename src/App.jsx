import React, { useEffect, useState } from "react";
import "./styles.scss";

import { winnerLogic } from "./GameLogic/Logic.jsx";

const App = () => {
  const [gameState, setgameState] = useState(Array(9).fill(0));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [Winner, setWinner] = useState(false);
  const [count, setCount] = useState(0);

  //Checking Winner
  useEffect(() => {
    const iswinner = winnerLogic(gameState);
    setWinner(iswinner);
  }, [gameState]);

  // Onclick handler
  const isClick = (key) => {
    setgameState((prev) => {
      const newgameState = [...prev];

      if (newgameState[key] === 0) {
        if (currentPlayer === "X") {
          newgameState[key] = "X";
          setCurrentPlayer("#");
        } else {
          newgameState[key] = "#";
          setCurrentPlayer("X");
        }
        setCount(count + 1);
      }
      return newgameState;
    });
  };

  const reset = () => {
    setgameState(Array(9).fill(0));
    setCount(0);
  };

  return (
    <div className="__mainContainer">
      {/* //  Dashboard */}
      <header>
        <h2>Tic Tac Toe</h2>

        {!Winner ? (
          count < 9 ? (
            <div className="winnerDashBoard">
              Player Turn : <em> {currentPlayer}</em>{" "}
            </div>
          ) : (
            <div className="winnerDashBoard winner">
              <p>Game Drawn</p>
              <button onClick={reset}>Restart</button>
            </div>
          )
        ) : (
          <div className="winnerDashBoard winner">
            <p>
              Winner is : <em> {Winner}</em>
            </p>
            <button onClick={reset}>Restart</button>
          </div>
        )}
      </header>
      {/* //  Dashboard */}

      {/* //Game Section */}
      <div className="GameContainer">
        {gameState.map((item, index) => (
          <Cell
            key={index}
            myProps={{
              item,
              isClick,
              currentPlayer,
              index,
              Winner,
            }}
          />
        ))}
      </div>

      {/* //Game Section */}
    </div>
  );
};

const Cell = ({ myProps }) => {
  const { item, isClick, index, Winner, currentPlayer } = myProps;
  const [cellcolor, setcellcolor] = useState();

  function Ui() {
    if (item === 0) setcellcolor("transparent");
    else {
      if (currentPlayer === "X") setcellcolor("lime");
      else setcellcolor("pink");
    }
  }

  useEffect(() => {
    Ui();
  }, [item]);

  return (
    <div
      className="cell"
      style={{
        backgroundColor: cellcolor,
      }}
      onClick={() => {
        if (!Winner) {
          isClick(index);
        } else {
          alert(`Winner is ${Winner} , Click on restart button for a new Game`);
        }
      }}
    >
      {item === 0 ? null : item}
    </div>
  );
};

export default App;
