import React, { useState } from 'react';

import InputArea from './components/InputArea';
import DisplayArea from './components/DisplayArea';

import './styles.css';

function App() {
  const [expression, setExpression] = useState('0');
   const [result, setResult] = useState('0');
  const [hasDecimal, setHasDecimal] = useState(false);
  const [startsWithZero, setStartsWithZero] = useState(true)
   
   function clear() {
     setExpression(['0'])
     setResult('0')
     setHasDecimal(false)
     setStartsWithZero(true)
   }
   
   function inputNumber(digit) {
     const lastEntry = result[result.length - 1]
     const lastIsOperator = (lastEntry === '+' || lastEntry === '-' || lastEntry === '*' || lastEntry === '/');
     
     if(digit !== '0') {setStartsWithZero(false)}
     
     if(startsWithZero){
       setExpression([...expression.slice(0,-1), digit])
       return setResult([...expression.slice(0,-1), digit])
     }
     
     setExpression([...expression, digit])
     
     if(lastIsOperator) {
       return setResult([...result.slice(0,-1), digit])
     }
     return setResult([...result, digit])
   }
   
   function inputDecimal() { 
     if(!hasDecimal){  
       setHasDecimal(true)
       setExpression([...expression, '.'])
       setResult([...expression, '.'])
     }
   }
   
   function inputOperator(operator) {
     
     const lastEntry = expression[expression.length - 1]
     const secondLastEntry = expression[expression.length - 2]
     const lastIsOperator = (lastEntry === '+' || lastEntry === '-' || lastEntry === '*' || lastEntry === '/');
     const secondLastIsOperator = (secondLastEntry === '+' || secondLastEntry === '-' || secondLastEntry === '*' || secondLastEntry === '/');
     
     setStartsWithZero(false)
     setHasDecimal(false)
     setResult(operator)
     
       if(lastIsOperator){
         if(secondLastIsOperator){
           return setExpression([...expression.slice(0,-2), operator])     
         }
         
         if(operator !== '-'){
           return setExpression([...expression.slice(0,-1), operator])
       }
         
     }
     return setExpression([...expression, operator])
   }
   
   function evaluate() {
     setHasDecimal(false);
     setResult(eval(expression.join('')))
     setExpression([eval(expression.join(''))])
     setStartsWithZero(true)
   }
   
   return (
     <div id='calculator'>
       <DisplayArea 
         expression={expression} 
         result={result}
       />
       <InputArea 
         clear={clear}
         inputNumber={inputNumber}
         inputDecimal={inputDecimal} 
         inputOperator={inputOperator}
         evaluate={evaluate}
       />
     </div>
   )
 }

 export default App;
