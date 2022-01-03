import React, { useEffect, useState } from "react";
import Board from "./components/Board";
import style from "./styles/Game.module.css";
import axios from "axios";

function App() {
  const [light, setlight] = useState(0);
  const [dark, setdark] = useState(0);
  const [board, setboard] = useState([]);
  const [playerTurn, setplayerTurn] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/init`)
      .then((res) => {
        console.log(res.data);
        let { board, lightPieces, darkPieces, startTurn } = res.data;

        setboard(board);
        setlight(lightPieces.length);
        setdark(darkPieces.length);
        setplayerTurn(startTurn);
      })
      .catch((e) =>
        console.error(
          `Could not get init board from URL:${process.env.REACT_APP_SERVER_URL}/init}`
        )
      );
  }, []);

  return (
    <div className={style.game}>
      <h2>White</h2>
      <p>{light}</p>
      <h2>Black</h2>
      <p>{dark}</p>
      <Board board={board} playerTurn={playerTurn} />
    </div>
  );
}

export default App;
