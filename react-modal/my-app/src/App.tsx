import { useState } from 'react';
import './App.css';
import { Modal } from './Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleDelete(): void {
    alert('deleted');
    setIsOpen(false);
  }

  function handleCancel(): void {
    setIsOpen(false);
  }

  function handleClose(): void {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Delete Me</button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <p>Do you want to delete me?</p>
        <button onClick={handleCancel}>Naw</button>
        <button onClick={handleDelete}>Yah</button>
      </Modal>
    </>
  );
}

export default App;
