type Props = {
  itemsRotating: string[];
  currentIndex: number;
};

export function Banner({ itemsRotating, currentIndex }: Props) {
  return <h3>{itemsRotating[currentIndex]}</h3>;
}

export default Banner;
