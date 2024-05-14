import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const text = 'we love ducks!';
const imgContainer = '/starry-sky.jpeg';
const imgCaption = 'these are ducks in space';
const imgDescription = 'ducks are cool';
const bttnContainer = 'Click For more ducks';
function App() {
  return (
    <>
      <Header headerText={text} />
      <ImageContainer src={imgContainer} />
      <ImageCaption pictureCaption={imgCaption} />
      <ImageDescription description={imgDescription} />
      <ButtonContainer label={bttnContainer} />
    </>
  );
}

export default App;
