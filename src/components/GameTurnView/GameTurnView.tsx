import React from 'react';
import Point from '../Point/Point';
import styles from './GameTurnView.module.css';
import UserImage from "../UserImage/UserImage";
import {GameTurn} from "../../models/game-turn";

export enum GameTurnViewPosition {
  Left,
  Right
}

type GameTurnViewProps = {
  turn: GameTurn;
  position: GameTurnViewPosition;
}

function GameTurnView({turn, position}: GameTurnViewProps) {
  const {value, dividend, user} = turn;
  const result = (value + dividend) / 3;

  return (
    <section className={`${styles.GameTurnView} ${getPositionClass(position)}`}>
      <UserImage user={user}/>
      <div className={styles.PointsContainer}>
        <Point value={value}/>
        <div className={styles.Calculation}>
          {`[(${value} + ${dividend}) / 3] = `}
          <span className={`${styles.Result} ${result === 1 && styles.Winner}`}>
            {result}
          </span>
        </div>
      </div>
    </section>
  );
}

export default GameTurnView;

function getPositionClass(position: GameTurnViewPosition) {
  switch (position) {
    case GameTurnViewPosition.Left:
      return styles.Left;
    case GameTurnViewPosition.Right:
      return styles.Right;
  }
}