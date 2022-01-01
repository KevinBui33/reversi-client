import React from "react";
import Piece from "./Piece";
import styles from "../styles/Board.module.css";

interface BoardTileProps {
  piece: string;
  color?: string | null;
}

const BoardTile: React.FC<BoardTileProps> = ({ piece, color }) => {
  return (
    <div id={piece} className={styles.tile}>
      <Piece color={color} />
    </div>
  );
};

export default BoardTile;
