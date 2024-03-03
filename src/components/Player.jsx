import { useRef, useState } from "react";

export default function Player() {

  const[name , setName] = useState()
  const playerName =  useRef()

  const handleClick = () => {
    setName(playerName.current.value)
    playerName.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome { name ??  'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName} required />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}
