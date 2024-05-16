import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Uncontrolled Form data:', data);
  };

  return (
    <>
      <h1>uncontrolled</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default RegistrationFormUncontrolled;
