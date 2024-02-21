import React, { useState } from 'react'
import Game from './Components/Game/Game'
import Front from './Components/Frontpage/Front'

function App() {
  const [gameStarted, setGamestarted] = useState(false);

  const toggelfunc = () =>{
    setGamestarted((value) =>(!value))
  }


  return (
    <>
    {gameStarted ? <Game/> : <Front toggel={toggelfunc}/>}
    

    </>
  )
}

export default App