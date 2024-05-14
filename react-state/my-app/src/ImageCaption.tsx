import { useState } from 'react';

type Props = {
  imageCap: string[];
};

export function ImageCaption({ imageCap }: Props) {
  const [captionIndex, setCaptionIndex] = useState(0);

  function handleClick() {
    if (captionIndex >= imageCap.length - 1) {
      console.log(captionIndex);
      setCaptionIndex(0);
      console.log(captionIndex);
    } else {
      console.log(captionIndex);
      setCaptionIndex(captionIndex + 1);
      console.log(captionIndex);
    }
  }

  return (
    <div>
      <h3 onClick={handleClick}>{imageCap[captionIndex]}</h3>
    </div>
  );
}
