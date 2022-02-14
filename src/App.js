/* eslint-disable no-eval */
import './App.css';
import React, { useState} from 'react';

function App() {

  const [result, setResult] = useState("");
 
  function handleClick(e){
    setResult(result+e.target.name);
  }
  function backspace(){
    setResult(result.slice(0,result.length-1))
  }
  function clear(){
    setResult("");
  }

  function calculate()
  {
    try{
      setResult(eval(result));
    }
    catch(error)
    {
      setTimeout(()=>setResult(""),1000)
      setResult("Error"); 
    }
  }
  return (
    
    <div className="calc-app">
    
        <input type="text" id ="screen" value={result}  />
    
      <div className='keypad'>
        <button className='clear long' onClick={clear}>Clear</button>
        <button id='backspace' onClick={backspace}>⌫</button>
        <button className='operator' name="+" onClick={handleClick}>+</button> 
        <button className='nums' name="7" onClick={handleClick}>7</button> 
        <button className='nums' name="8" onClick={handleClick}>8</button>
        <button className='nums' name="9" onClick={handleClick}>9</button>
        <button className='operator' name="-" onClick={handleClick}>-</button>
        <button className='nums' name="4" onClick={handleClick}>4</button>
        <button className='nums' name="5" onClick={handleClick}>5</button>
        <button className='nums' name="6" onClick={handleClick}>6</button>
        <button className='operator' name="*" onClick={handleClick}>&times;</button>
        <button className='nums' name="1" onClick={handleClick}>1</button>
        <button className='nums' name="2" onClick={handleClick}>2</button>
        <button className='nums' name="3" onClick={handleClick}>3</button>
        <button className='operator' name="/" onClick={handleClick}>÷</button>
        <button className='operator dot' name="." onClick={handleClick}>.</button>
        <button className='nums' name="0" onClick={handleClick}>0</button>
        <button className='result long' onClick={calculate}>=</button>
      </div>
    </div>
   
  );
}

export default App;
