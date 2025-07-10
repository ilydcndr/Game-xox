import React, { useState } from 'react';
import './App.css';
import Player from './components/Player';
import Gameboard from './components/Gameboard';
import Log from './components/Log';

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer;
}

const App = () => {

  const [gameTurns, setGameTurns] = useState([]);

  console.log(gameTurns,"GAMETURNS")

  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) => {

    setGameTurns(prevTurns=> {
    console.log(prevTurns,"PREVTURNS")
    const currentPlayer = deriveActivePlayer(prevTurns);
    const updatedTurns = [

      { square: { row: rowIndex, col: colIndex },
        player: currentPlayer
      },
        ...prevTurns];

      return updatedTurns;
    })
  }

  return (
  <main>
    <div id='game-container'>
      <ol id='players' className='highlight-player'>
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
          <Player initialName='Player 2' symbol='0' isActive={activePlayer === 'O'}/>
      </ol>
      <Gameboard onSelectSquare = {handleSelectSquare} turns={gameTurns}/>
      <Log turns={gameTurns}/>
    </div>
  </main>
  )
}

export default App