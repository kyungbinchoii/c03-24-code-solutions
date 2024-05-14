import './ImageContainer.css';
import { useState } from 'react';

type Props = {
  imageSrc: string[];
};

export function ImageContainer({ imageSrc }: Props) {
  const [textIndex, setTextIndex] = useState(0);

  function handleClick() {
    if (textIndex >= imageSrc.length - 1) {
      setTextIndex(0);
    } else {
      setTextIndex(textIndex + 1);
    }
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          onClick={handleClick}
          src={imageSrc[textIndex]}
          alt="space-image"
        />
      </div>
    </div>
  );
}
