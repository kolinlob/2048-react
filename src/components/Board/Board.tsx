import Grid from "../Grid/Grid";
import styles from "./Board.module.scss";

const Board = (props: { size: number }) => {
  return <div className={styles.board}><Grid size={props.size} /></div>;
};

export default Board;
