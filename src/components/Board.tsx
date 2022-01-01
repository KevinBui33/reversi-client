import React, { useEffect, useState } from "react";
import BoardTile from "./BoardTile";
import styles from "../styles/Board.module.css";

interface BoardProps {
  board: { pos: string; color: string | null }[];
}

const Board: React.FC<BoardProps> = ({ board }) => {
  return (
    <div className={styles.boardContainer}>
      {board.map((t) => {
        return <BoardTile key={t.pos} piece={t.pos} color={t.color} />;
      })}
    </div>
  );
};

export default Board;
