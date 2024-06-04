import { useState, useRef } from 'react';
import './App.css';
import { Popup } from './Popup';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
        Pop up!
      </button>
      <Popup
        isOpen={isOpen}
        positionTo={buttonRef.current}
        onClose={() => setIsOpen(false)}>
        <div className="menu-wrapper">
          <ul>
            <li>ONE</li>
            <li>TWO</li>
            <li>THREE</li>
            <li>FOUR</li>
            <li>FIVE</li>
          </ul>
        </div>
      </Popup>
    </>
  );
}
