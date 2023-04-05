import './App.css';
import freecodeCampLogo from './images/freecodecamp-logo.png';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter( counter + 1 );
  }

  const resetHandler = () => {
    setCounter(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
         className='freecodecamp-logo'
         src={freecodeCampLogo}
         alt='Logo de freeCodeCamp'/>
      </div>
      
      <div className='contenedor-principal'>
        <Counter 
          numClicks={counter}
        />

        <Button
          text='Click'
          isClickButton={true}
          clickHandler={clickHandler}
        />
        
        <Button
          text='Reset'
          isClickButton={false}
          clickHandler={resetHandler}
        />
      </div>
    </div>
  );
}

export default App;
