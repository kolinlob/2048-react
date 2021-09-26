import { useEffect } from "react";
import { useThrottledCallback } from "use-debounce";
import Board from "../Board/Board";
// import styles from "./Game.module.scss";

const Game = () => {
  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();

    switch (e.code) {
      case "ArrowLeft":
        return console.log("ArrowLeft");
      case "ArrowRight":
        return console.log("ArrowRight");
      case "ArrowUp":
        return console.log("ArrowUp");
      case "ArrowDown":
        return console.log("ArrowDown");
    }
  };

  const throttledHandleKeyDown = useThrottledCallback(handleKeyDown, 250, {
    leading: true,
    trailing: false,
  });

  useEffect(() => {
    window.addEventListener("keydown", throttledHandleKeyDown);

    return () => {
      window.removeEventListener("keydown", throttledHandleKeyDown);
    };
  }, [throttledHandleKeyDown]);

  return <Board size={4} />;
};

export default Game;
