type Props = {
  itemsRotating: string[];
  indicatorIndex: number;
  goToItem: (index: number) => void;
};

export function Indicator({ itemsRotating, indicatorIndex, goToItem }: Props) {
  return (
    <div style={{ display: 'flex' }}>
      {itemsRotating.map((_, index) => (
        <div
          key={index}
          style={{
            width: '20px',
            height: '20px',
            background: index === indicatorIndex ? 'black' : 'gray',
            margin: '0 5px',
            textAlign: 'center',
            color: 'white',
            lineHeight: '20px',
            cursor: 'pointer',
          }}
          onClick={() => goToItem(index)}>
          {index}
        </div>
      ))}
    </div>
  );
}

export default Indicator;
