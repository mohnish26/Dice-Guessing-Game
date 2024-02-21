import React, { useState } from 'react'
import './Game.css'

function Game() {
  const [userNumber, Setusernumber] = useState(0)
  const [diceNumber, setDicenumber] = useState(1)
  const [howTo, sethowToPlay] = useState(false)
  const [score, setScore] = useState(0)
  const btn = [1, 2, 3, 4, 5, 6]

  const genrateNumber = () => {
    setDicenumber(Math.floor(Math.random() * 6) + 1)
  }

  const reset = () =>{
    setScore(0)
  }

  const howToPlay = () =>{
    sethowToPlay((prev)=>(!prev))


  }

  const numberSelected = (value) => {
    Setusernumber(value)


  }

  const checkScore = () => {
    genrateNumber()
    if (diceNumber == userNumber) {
      setScore(score + diceNumber)
    }
    else {
      setScore(score -2)
    }

    Setusernumber(0)

  }

  return (
    <main>
      <div className='main-div-Game'>
        <div className='sec-main-div'>
          <span>{score}</span>
          <p>Total Score</p>

        </div>
        <div className='btn-div'>
          {btn.map((value, Index) => (<button onClick={() => numberSelected(value)}> {value} </button>))}
          <p>Select Number</p>

        </div>


      </div>
      <div className='game-sec-div'>
        <div className='dice-div'>
          <img onClick={() => {
            if (userNumber > 0) {
              checkScore();
            } else {
              alert("Please select a Number");
            }
          }} src={`/images/dice${diceNumber}.png`} />
        </div>
        <p>Click to roll</p>
        <div className='dice-btn'>
          <button onClick={reset} id='first-btn'>Reset Score</button>
          <button id='sec-btn' onClick={howToPlay}>How to Play?</button>
        </div>
        <div className='rules'>
        <span>{howTo ? <div> <p>
              - First, select a number by clicking on one of the buttons.
              <br />
              - Click on the dice to roll it and see the result.
              <br />
              - If your selected number matches then you got +Your Selected Number
              <br/>
              - If your selected number not matches then you got -2

              </p>
              <button onClick={howToPlay}>Hide
              </button></div>:<p></p>}</span>
        </div>

      </div>
    </main>
  )
}

export default Game
