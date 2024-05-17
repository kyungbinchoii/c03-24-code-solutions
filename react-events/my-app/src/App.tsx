import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';
import { useState } from 'react';

const headerText = 'React Image Bank';
const imageSrc = ['/starry-sky.jpeg', '/cool-kitty.jpg', '/cool-car.jpg'];
const imageCap = ['A Beautiful Image of Space', 'A Cool Cat', 'A Cool Car'];
const imageDescrip = [
  'This is a wonderful sky full of stars!',
  'This is a picture of a very cool cat!',
  'This is a picture of a very cool car!',
];
const buttonText = 'Click for Next Image';

export function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClick() {
    setCurrentIndex((currentIndex + 1) % imageSrc.length);
  }
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc[currentIndex]} />
      <ImageCaption imageCap={imageCap[currentIndex]} />
      <ImageDescription imageDescrip={imageDescrip[currentIndex]} />
      <ButtonContainer onButtonClick={handleClick} buttonText={buttonText} />
    </>
  );
}
