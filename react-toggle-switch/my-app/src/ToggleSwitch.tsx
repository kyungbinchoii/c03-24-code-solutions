import { useState } from 'react';
import './toggle-switch.css';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <div
        className={`toggle-switch ${isOn ? 'is-on' : ''}`}
        onClick={toggleSwitch}>
        <div className="slider">
          <div className="switch"></div>
        </div>
        <span className="state-label">{isOn ? 'Lights On' : 'Lights Out'}</span>
      </div>
    </>
  );
}

export default ToggleSwitch;
