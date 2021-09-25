import React from "react";
import styles from "./Tile.module.scss";
type Props = { value: number; position: [number, number] };
const Tile = ({ value, position }: Props) => {
  return (
    <div className={`${styles.tile} ${styles.tile}--${value}`}>{value}</div>
  );
};

export default Tile;
