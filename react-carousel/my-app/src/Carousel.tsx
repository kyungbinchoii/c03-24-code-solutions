import { useState, useEffect, useRef, useCallback } from 'react';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Dots from './Dots';
import ImageCard from './ImageCard';

type Image = {
  src: string;
  alt: string;
};

type Props = {
  jjk: Image[];
};

export function Carousel({ jjk }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % jjk.length);
  }, [jjk.length]);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + jjk.length) % jjk.length);
  };

  const setActiveImage = (index: number) => {
    setCurrentIndex(index);
  };

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(nextImage, 1000);
  }, [nextImage]);

  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetInterval]);

  useEffect(() => {
    resetInterval();
  }, [currentIndex, resetInterval]);

  return (
    <div>
      <PrevButton onClick={prevImage} />
      <ImageCard src={jjk[currentIndex].src} alt={jjk[currentIndex].alt} />
      <NextButton onClick={nextImage} />
      <Dots
        count={jjk.length}
        currentIndex={currentIndex}
        onClick={setActiveImage}
      />
    </div>
  );
}

export default Carousel;
