import React from 'react';
import Point from '../Point/Point';
import styles from './GivenPoint.module.css';
import {User} from "../../models/user";
import UserImage from "../UserImage/UserImage";

export enum GivenPointPosition {
  Left,
  Right
}

type GivenPointProps = {
  value: number;
  dividend: number;
  position: GivenPointPosition;
  user: User;
}

function GivenPoint({value, dividend, position, user}: GivenPointProps) {
  const result = (value + dividend) / 3;
  return (
    <section className={`${styles.GivenPoint} ${getPositionClass(position)}`}>
      <UserImage user={user}/>
      <div className={styles.PointsContainer}>
        <Point value={value}/>
        <div className={styles.Calculation}>
          {`[(${value} + ${dividend}) / 3] = `} <span className={`${styles.Result} ${result === 1 && styles.Winner}`}>{result}</span>
        </div>
      </div>
    </section>
  );
}

export default GivenPoint;

function getPositionClass(position: GivenPointPosition) {
  switch (position) {
    case GivenPointPosition.Left:
      return styles.Left;
    case GivenPointPosition.Right:
      return styles.Right;
  }
}