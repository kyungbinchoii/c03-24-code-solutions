import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count >= 18) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  console.log('Count', count);

  let buttonClassName = 'buttonDefault';
  let buttonText = 'HOT BUTTON STARTS HERE';

  if (count >= 3 && count < 6) {
    buttonClassName = 'buttonpurple';
    buttonText = 'IM GETTING WARMER';
  } else if (count >= 6 && count < 9) {
    buttonClassName = 'buttongreen';
    buttonText = 'IM GETTING WARMER';
  } else if (count >= 9 && count < 12) {
    buttonClassName = 'buttonred';
    buttonText = 'WARMER!!!';
  } else if (count >= 12 && count < 15) {
    buttonClassName = 'buttonaqua';
    buttonText = 'ITS HOT IN HERE';
  } else if (count >= 15 && count < 18) {
    buttonClassName = 'buttonorange';
    buttonText = 'IM ON FIRE!';
  } else if (count >= 18) {
    buttonClassName = 'buttonpink';
    buttonText = 'Fire died. Click to restart';
  }

  return (
    <>
      <button className={buttonClassName} onClick={handleClick}>
        {buttonText}
      </button>
      <p>Times you burned me alive: {count} </p>
    </>
  );
}

export default App;
