import React, { useState } from 'react'

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

const Gameboard = ({onSelectSquare,activePlayer}) => {

  const [gameBoard, setGameBoard] = useState(initialGameBoard)

  const handleSelectSquare = (rowIndex,colIndex) => {
    setGameBoard(prevGameBoard => {
        const updatedBoard = prevGameBoard.map(innerElem => [...innerElem])
        updatedBoard[rowIndex][colIndex] = activePlayer;
        return updatedBoard;
        })

    onSelectSquare()

  }

  return (
    <ol id='game-board'>
        {gameBoard.map((row,rowIndex)=>(
         <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol,colIndex)=>(
                    <li key={colIndex}>
                        <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                    </li>
                ))}
            </ol>
         </li>
        ))}
    </ol>
  )
}

export default Gameboard