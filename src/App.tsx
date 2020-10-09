import React from 'react';
import './App.module.css';
import styles from './App.module.css';
import GameSessionPage from "./pages/GameSessionPage/GameSessionPage";

function App() {
  return (
    <div className={styles.App}>
      <GameSessionPage/>
    </div>
  );
}

export default App;
