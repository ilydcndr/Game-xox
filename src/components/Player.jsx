import React, { useState } from 'react'

const Player = ({initialName,symbol,isActive}) => {

  const [isEditting,setIsEditting] = useState(false)
  const [playerName, setPlayerName] = useState(initialName)

  const handleEditClick = () => {
    setIsEditting(prev => !prev)
  }

  const handleChange = (e) => {
    setPlayerName(e.target.value)
  }

  let editablePlayerName = <span className='player-name'>{playerName}</span>

  if(isEditting) {
    editablePlayerName = <input className='player-name' required value={playerName} onChange={(e)=>handleChange(e)}/>
  }

  return (
    <li className={isActive ? 'active': null}>
        <span className='player'>
          {editablePlayerName}
          <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={() =>handleEditClick()}>{isEditting ? 'Save' : 'Edit'}</button>
    </li>
  )
}

export default Player