 
import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <center> 
    <div className="calculator">
      <input type="text" value={result} disabled />
      <div className="keypad">
        <div className="numbers">
          <button name="clear" onClick={clear} className="clear">
            AC
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
        </div>
        <div className="operators">
          <button name="/" onClick={handleClick} className="operator">
            &divide;
          </button>
          <button name="*" onClick={handleClick} className="operator">
            &times;
          </button>
          <button name="-" onClick={handleClick} className="operator">
            &ndash;
          </button>
          <button name="+" onClick={handleClick} className="operator">
            +
          </button>
          <button onClick={calculate} className="equal">
            =
          </button>
        </div>
      </div>
    </div>
    </center>
  );
}

export default Calculator;