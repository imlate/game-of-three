import React, {useState} from 'react';
import styles from './GameSessionPage.module.css';
import GameSessionHeader from "../../components/GameSessionHeader/GameSessionHeader";
import GameSessionFooter from "../../components/GameSessionFooter/GameSessionFooter";
import GivenPoint, {GivenPointPosition} from "../../components/GivenPoint/GivenPoint";
import {User} from "../../models/user";

function GameSessionPage() {
  const [history, setHistory] = useState<number[]>([]);

  const selectPoint = (value: number) => {
    console.log(value);
    setHistory([...history, value]);
  };

  const opponent: User = {name: 'Hello', imageSource: 'logo192.png'};
  const user: User = {name: 'Can', imageSource: 'logo192.png'};



  return (
    <section className={styles.GameSessionPage}>
      <GameSessionHeader opponent={opponent}/>
      <div className={styles.GameContainer}>
        <section className={styles.Game}>
          <GivenPoint value={1}
                      dividend={17}
                      position={GivenPointPosition.Left}
                      user={opponent}/>
          <GivenPoint value={-1}
                      dividend={16}
                      position={GivenPointPosition.Right}
                      user={user}/>
          <GivenPoint value={1}
                      dividend={17}
                      position={GivenPointPosition.Left}
                      user={opponent}/>
          <GivenPoint value={-1}
                      dividend={16}
                      position={GivenPointPosition.Right}
                      user={user}/>
          <GivenPoint value={1}
                      dividend={17}
                      position={GivenPointPosition.Left}
                      user={opponent}/>
          <GivenPoint value={-1}
                      dividend={16}
                      position={GivenPointPosition.Right}
                      user={user}/>
          <GivenPoint value={1}
                      dividend={17}
                      position={GivenPointPosition.Left}
                      user={opponent}/>
          <GivenPoint value={-1}
                      dividend={16}
                      position={GivenPointPosition.Right}
                      user={user}/>
          <GivenPoint value={1}
                      dividend={17}
                      position={GivenPointPosition.Left}
                      user={opponent}/>
          <GivenPoint value={-1}
                      dividend={16}
                      position={GivenPointPosition.Right}
                      user={user}/>
          <GivenPoint value={1}
                      dividend={17}
                      position={GivenPointPosition.Left}
                      user={opponent}/>
          <GivenPoint value={-1}
                      dividend={16}
                      position={GivenPointPosition.Right}
                      user={user}/>
          <GivenPoint value={1}
                      dividend={17}
                      position={GivenPointPosition.Left}
                      user={opponent}/>
          <GivenPoint value={0}
                      dividend={3}
                      position={GivenPointPosition.Right}
                      user={user}/>
        </section>
      </div>
      <GameSessionFooter selectPoint={selectPoint}/>
    </section>
  );
}

export default GameSessionPage;