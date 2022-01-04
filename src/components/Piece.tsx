import React, { useEffect, useState } from "react";
import style from "../styles/Board.module.css";

interface PieceProp {
  color?: string | null;
}

const Piece: React.FC<PieceProp> = ({ color }) => {
  const [pieceColor, setpieceColor] = useState("");

  useEffect(() => {
    switch (color) {
      case "light":
        setpieceColor(`${style.discWhite}`);
        break;
      case "dark":
        setpieceColor(`${style.discBlack}`);
        break;
      case "move":
        setpieceColor(`${style.move}`);
        break;
    }
  }, []);

  if (color == null) return <span></span>;
  return <span className={pieceColor}></span>;
};

export default Piece;
