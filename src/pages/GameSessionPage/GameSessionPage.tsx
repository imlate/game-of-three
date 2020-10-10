import React, {useState} from 'react';
import styles from './GameSessionPage.module.css';
import GameSessionHeader from "../../components/GameSessionHeader/GameSessionHeader";
import GameSessionFooter from "../../components/GameSessionFooter/GameSessionFooter";
import GameTurnView, {GameTurnViewPosition} from "../../components/GameTurnView/GameTurnView";
import {User} from "../../models/user";
import {GameTurn} from "../../models/game-turn";

function GameSessionPage() {
  let [history, setHistory] = useState<GameTurn[]>([]);
  let [startingNumber, setStartingNumber] = useState<number>();

  const opponent: User = {name: 'Hello', imageSource: 'logo192.png'};
  const user: User = {name: 'Can', imageSource: 'logo192.png'};

  const selectPoint = (value: number) => {
    console.log(value);
    let dividend: number;

    if (history && history.length) {
      const previousDividend = history[history.length - 1].dividend;
      const previousValue = history[history.length - 1].value;
      dividend = (previousValue + previousDividend) / 3;
    } else {
      dividend = Math.round(Math.random() * 100) + 30;
    }

    setHistory([...history, {
      value: value,
      dividend: dividend,
      user: user
    }]);
  };


  return (
    <section className={styles.GameSessionPage}>
      <GameSessionHeader opponent={opponent}/>
      <div className={styles.GameContainer}>
        <section className={styles.Game}>
          {renderGameTurns(history, user)}
        </section>
      </div>
      <GameSessionFooter selectPoint={selectPoint}/>
    </section>
  );
}

export default GameSessionPage;

function renderGameTurns(history: GameTurn[], user: User) {
  if (!history || !history.length) {
    return;
  }
  return history
    .map(turn => <GameTurnView turn={turn}
                               position={getPosition(user, turn.user)}/>)
}

function getPosition(currentUser: User, turnUser: User): GameTurnViewPosition {
  return currentUser.name === turnUser.name ? GameTurnViewPosition.Right : GameTurnViewPosition.Left;
}