import React, { useEffect, useState } from "react";
import BoardTile from "./BoardTile";
import styles from "../styles/Board.module.css";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

const Board = () => {
  const [board, setboard] = useState<
    Array<{ pos: string; color: boolean | null }>
  >([]);

  // FIXME Init the board, most likley gonna do some call to the server here
  useEffect(() => {
    verticalAxis.forEach((v) => {
      horizontalAxis.forEach((h) => {
        let initPiece = `${h}${v}`;
        let color: boolean | null = null;
        if (initPiece == "d4" || initPiece == "e5") {
          color = true;
        } else if (initPiece == "d5" || initPiece == "e4") {
          color = false;
        }
        setboard((prev) => [...prev, { pos: initPiece, color }]);
      });
    });
  }, []);

  return (
    <div className={styles.boardContainer}>
      {board.map((t) => {
        return <BoardTile key={t.pos} piece={t.pos} color={t.color} />;
      })}
    </div>
  );
};

export default Board;
