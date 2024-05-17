import { ChangeEvent, useState } from 'react';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value);
  }

  return (
    <>
      <label>
        Password:
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
        />
      </label>
      {password.length == 0 && <span style={{ color: 'red' }}> Required</span>}
      {password.length > 0 && password.length < 8 && (
        <span style={{ color: 'red' }}>Password must be over 8 characters</span>
      )}
      {password.length >= 8 && <span style={{ color: 'green' }}>✓</span>}
    </>
  );
}

export default ValidatedInput;
