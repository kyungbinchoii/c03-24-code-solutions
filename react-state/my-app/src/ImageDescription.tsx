import { useState } from 'react';

type Props = {
  imageDescrip: string[];
};

export function ImageDescription({ imageDescrip }: Props) {
  const [textIndex, setTextIndex] = useState(0);
  function handleClick() {
    if (textIndex >= imageDescrip.length - 1) {
      console.log(textIndex);
      setTextIndex(0);
      console.log(textIndex);
    } else {
      console.log(textIndex);
      setTextIndex(textIndex + 1);
      console.log(textIndex);
    }
  }
  return (
    <div>
      <p onClick={handleClick}>{imageDescrip[textIndex]}</p>
    </div>
  );
}
