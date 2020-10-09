import styles from './GameSessionHeader.module.css';
import React from 'react';
import {User} from "../../models/user";
import UserImage from "../UserImage/UserImage";

export type GameSessionHeaderProps = {
  opponent: User;
}

function GameSessionHeader({opponent}: GameSessionHeaderProps) {
  return (
    <header className={styles.Header}>
      <UserImage user={opponent}/>
      <div className={styles.OpponentNameContainer}>
        <div className={styles.OpponentName}>
          {opponent.name}
        </div>
        <div className={styles.Slogan}>
          Win the game or win the job
        </div>
      </div>
    </header>
  );
}

export default GameSessionHeader;