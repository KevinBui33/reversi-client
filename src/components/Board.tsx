import React, { useEffect, useState } from "react";
import BoardTile from "./BoardTile";
import styles from "../styles/Board.module.css";

interface BoardProps {
  board: { pos: string; color: string | null }[][];
  playerTurn: string;
}

const Board: React.FC<BoardProps> = ({ board }) => {
  return (
    <div className={styles.boardContainer}>
      {board.map((t) => {
        return t.map((d) => (
          <BoardTile key={d.pos} piece={d.pos} color={d.color} />
        ));
      })}
    </div>
  );
};

export default Board;
