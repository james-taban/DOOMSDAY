import { useRef } from 'react'
import { useState } from 'react'

export default function Player() {
  const playerName2 = useRef()

  const [playerName, setPlayerName] = useState()
  const [submitted, setSubmitted] = useState(false)

  function handleClick() {
    setPlayerName(playerName2.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName2} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  )
}
