import React, { useState } from 'react';
import Display from './Display';
import Key from './Key';
import './css/Calculator.css';
import calculate from './logic/calculate';

const initialValues = {
  total: 0,
  next: null,
  operation: null,
};

const Calculator = () => {
  const [state, setState] = useState(initialValues);

  const handleClick = (buttonName) => {
    setState((prevState) => {
      const newResult = calculate(prevState, buttonName.target.textContent);
      return { ...prevState, ...newResult };
    });
  };

  return (
    <div className="main-cont">
      <article>
        <h2>Let&apos;s do some math!</h2>
      </article>
      <article>
        <div className="calc-container">
          <div className="row">
            <Display input={state} />
          </div>
          <div className="row">
            <Key manageClick={handleClick}>AC</Key>
            <Key manageClick={handleClick}>+/-</Key>
            <Key manageClick={handleClick}>%</Key>
            <Key manageClick={handleClick}>÷</Key>
          </div>
          <div className="row">
            <Key manageClick={handleClick}>7</Key>
            <Key manageClick={handleClick}>8</Key>
            <Key manageClick={handleClick}>9</Key>
            <Key manageClick={handleClick}>x</Key>
          </div>
          <div className="row">
            <Key manageClick={handleClick}>4</Key>
            <Key manageClick={handleClick}>5</Key>
            <Key manageClick={handleClick}>6</Key>
            <Key manageClick={handleClick}>-</Key>
          </div>
          <div className="row">
            <Key manageClick={handleClick}>1</Key>
            <Key manageClick={handleClick}>2</Key>
            <Key manageClick={handleClick}>3</Key>
            <Key manageClick={handleClick}>+</Key>
          </div>
          <div className="row last-row">
            <Key manageClick={handleClick}>0</Key>
            <Key manageClick={handleClick}>.</Key>
            <Key manageClick={handleClick}>=</Key>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Calculator;
