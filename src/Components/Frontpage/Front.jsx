import React from 'react';
import './Front.css';
function Front({toggel}) {
  

  return (
    <div className='Front-Main-Div'>
      <div>
        <img src='/images/dice.png' alt='Dice' />
      </div>
      <div className='Front-second-div'>
        <h1>Dice Game</h1>
        <button onClick={toggel} className='Front-btn'>
          Play Now
        </button>
      </div>
    </div>
  );
}

export default Front;
