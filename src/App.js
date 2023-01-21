import { useState } from 'react';
import './App.css';

function App() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const [ isDisabled, setIsDisabled ] = useState(false);

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  
  return (
    <div>
      <button 
        style={{backgroundColor: buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isDisabled}
        >
          Change to {newButtonColor}
      </button>
      <input 
        type="checkbox" 
        onClick={(e) => {
          setIsDisabled(e.target.checked);
        }} 
        >

      </input>
    </div>
  );
}

export default App;
