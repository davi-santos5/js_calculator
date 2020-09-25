import React from 'react';

import './styles.css';

function InputArea({clear, inputNumber, inputDecimal, inputOperator, evaluate}) {  
    return (
      <div id='inputs'>
        <button id='clear' onClick={clear}>Clear</button>
        <div id='numbers-area'>
          <button class='number' id='seven' onClick={() => inputNumber('7')}>7</button>
          <button class='number' id='eight' onClick={() => inputNumber('8')}>8</button>
          <button class='number' id='nine' onClick={() => inputNumber('9')}>9</button>
          <button class='number' id='four' onClick={() => inputNumber('4')}>4</button>
          <button class='number' id='five' onClick={() => inputNumber('5')}>5</button>
          <button class='number' id='six' onClick={() => inputNumber('6')}>6</button>
          <button class='number' id='one' onClick={() => inputNumber('1')}>1</button>
          <button class='number' id='two' onClick={() => inputNumber('2')}>2</button>
          <button class='number' id='three' onClick={() => inputNumber('3')}>3</button>
          <button class='number' id='zero' onClick={() => inputNumber('0')}>0</button>
          <button class='number' id='decimal' onClick={inputDecimal}>.</button>
        </div>
        <div id='operators'>
          <button class='operator' id='divide' onClick={() => inputOperator('/')}>/</button>
          <button class='operator' id='multiply' onClick={() => inputOperator('*')} >x</button>
          <button class='operator' id='subtract' onClick={() => inputOperator('-')} >-</button>
          <button class='operator' id='add' onClick={() => inputOperator('+')} >+</button> 
          <button class='operator' onClick={evaluate} id='equals'>=</button>
        </div>
      </div>
    )
  }

  export default InputArea;