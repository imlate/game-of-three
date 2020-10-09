import styles from './GameSessionFooter.module.css';
import Point from '../Point/Point';
import React from 'react';

type GameSessionFooterProps = {
  selectPoint: (value: number) => void
}

function GameSessionFooter({selectPoint}: GameSessionFooterProps) {
  return (
    <footer className={styles.Footer}>
      <Point value={-1}
             className={styles.PointButton}
             onClick={() => selectPoint(-1)}/>
      <Point value={0}
             className={styles.PointButton}
             onClick={() => selectPoint(0)}/>
      <Point value={1}
             className={styles.PointButton}
             onClick={() => selectPoint(1)}/>
    </footer>
  );
}

export default GameSessionFooter;