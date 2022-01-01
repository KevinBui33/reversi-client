import React, { useEffect, useState } from "react";
import Board from "./components/Board";
import style from "./styles/Game.module.css";
import axios from "axios";

function App() {
  const [light, setlight] = useState(0);
  const [dark, setdark] = useState(0);
  const [board, setboard] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/init`)
      .then((res) => setboard(res.data))
      .catch((e) => console.error("Could not get init board"));
  }, []);

  return (
    <div className={style.game}>
      <h2>White</h2>
      <p>{light}</p>
      <h2>Black</h2>
      <p>{dark}</p>
      <Board board={board} />
    </div>
  );
}

export default App;
