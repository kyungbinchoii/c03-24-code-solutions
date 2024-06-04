import { useState } from 'react';
import Next from './Next';
import Prev from './Prev';
import Indicator from './Indicator';
import Banner from './Banner';

type Props = {
  itemsRotating: string[];
};

export function RotatingBanner({ itemsRotating }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [indicatorIndex, setIndicatorIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemsRotating.length);
    setIndicatorIndex((prevIndex) => (prevIndex + 1) % itemsRotating.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemsRotating.length - 1 : prevIndex - 1
    );
    setIndicatorIndex((prevIndex) =>
      prevIndex === 0 ? itemsRotating.length - 1 : prevIndex - 1
    );
  };

  const goToItem = (index: number) => {
    setCurrentIndex(index);
    setIndicatorIndex(index);
  };

  return (
    <div>
      <Banner itemsRotating={itemsRotating} currentIndex={currentIndex} />
      <div>
        <Prev prevItem={prevItem} />
        <Indicator
          itemsRotating={itemsRotating}
          indicatorIndex={indicatorIndex}
          goToItem={goToItem}
        />
        <Next nextItem={nextItem} />
      </div>
    </div>
  );
}

export default RotatingBanner;
