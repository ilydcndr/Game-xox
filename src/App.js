import React, { useState } from 'react';
import './App.css';
import Player from './components/Player';
import Gameboard from './components/Gameboard';

const App = () => {

  const [activePlayer, setActivePlayer] = useState("X")

  const handleSelectSquare = () => {
    setActivePlayer(prevPlayer => prevPlayer === 'X' ? 'O': 'X')
  }

  return (
  <main>
    <div id='game-container'>
      <ol id='players' className='highlight-player'>
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
          <Player initialName='Player 2' symbol='0' isActive={activePlayer === 'O'}/>
      </ol>
      <Gameboard onSelectSquare = {handleSelectSquare} activePlayer={activePlayer}/>
    </div>
  </main>
  )
}

export default App