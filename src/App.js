import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('')

  const addInput = val => {
    setInput(input + val);
  }

  const result = () => {
    if (input) {
      setInput(evaluate(input))
    } else{
      alert('Please input values')
    }
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo' />
      </div>
      <div className='calculator-container'>
        <Screen input={input} />
        <div className='fila'>
          <Button manageClick={addInput}>1</Button>
          <Button manageClick={addInput}>2</Button>
          <Button manageClick={addInput}>3</Button>
          <Button manageClick={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manageClick={result}>=</Button>
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>/</Button>

        </div>
        <div className='fila'>
          <ClearButton manageClear ={
            () => setInput('')
          }>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
