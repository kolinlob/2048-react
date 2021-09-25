import styles from "./Grid.module.scss";

const Grid = (props: { size: number }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.grid__cell}></div>
      <div className={styles.grid__cell}></div>
      <div className={styles.grid__cell}></div>
      <div className={styles.grid__cell}></div>
      <div className={styles.grid__cell}></div>
      <div className={styles.grid__cell}></div>
      <div className={styles.grid__cell}></div>
      <div className={styles.grid__cell}></div>
      <div className={styles.grid__cell}></div>
      <div className={styles.grid__cell}></div>
      <div className={styles.grid__cell}></div>
      <div className={styles.grid__cell}></div>
      <div className={styles.grid__cell}></div>
      <div className={styles.grid__cell}></div>
      <div className={styles.grid__cell}></div>
      <div className={styles.grid__cell}></div>
    </div>
  );
};

export default Grid;
