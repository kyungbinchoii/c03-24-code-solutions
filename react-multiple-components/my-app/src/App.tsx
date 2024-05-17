import './App.css';
import RotatingBanner from './RotatingBanner';

function App() {
  const items = [
    'Aardvark',
    'Bengal',
    'Caterpillar',
    'Dromedary',
    'Elephant',
    'Ferret',
  ];
  return (
    <>
      <RotatingBanner itemsRotating={items} />
    </>
  );
}

export default App;
