import React from 'react';
import Display from './Display';
import Key from './Key';
import './Calculator.css';

function Calculator() {
  return (
    <div className="calc-container">
      <div className="row">
        <Display />
      </div>
      <div className="row">
        <Key>AC</Key>
        <Key>+/-</Key>
        <Key>%</Key>
        <Key>&divide;</Key>
      </div>
      <div className="row">
        <Key>7</Key>
        <Key>8</Key>
        <Key>9</Key>
        <Key>x</Key>
      </div>
      <div className="row">
        <Key>4</Key>
        <Key>5</Key>
        <Key>6</Key>
        <Key>-</Key>
      </div>
      <div className="row">
        <Key>1</Key>
        <Key>2</Key>
        <Key>3</Key>
        <Key>+</Key>
      </div>
      <div className="row last-row">
        <Key>0</Key>
        <Key>.</Key>
        <Key>=</Key>
      </div>
    </div>
  );
}

export default Calculator;
