type Props = {
  nextItem: () => void;
};

export function Next({ nextItem }: Props) {
  return <button onClick={nextItem}>Next</button>;
}

export default Next;
