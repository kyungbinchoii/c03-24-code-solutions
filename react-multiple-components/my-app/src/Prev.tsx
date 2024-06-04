type Props = {
  prevItem: () => void;
};

export function Prev({ prevItem }: Props) {
  return <button onClick={prevItem}>Prev</button>;
}

export default Prev;
