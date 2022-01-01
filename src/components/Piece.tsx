import React from "react";
import style from "../styles/Board.module.css";

interface PieceProp {
  color?: string | null;
}

const Piece: React.FC<PieceProp> = ({ color }) => {
  if (color == null) return <span></span>;
  return (
    <span
      className={color == "light" ? style.discWhite : style.discBlack}
    ></span>
  );
};

export default Piece;
