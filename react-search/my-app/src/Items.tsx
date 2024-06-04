type Props = {
  filteredQuotes: string[];
};

export function Items({ filteredQuotes }: Props) {
  return (
    <ul>
      {filteredQuotes.length > 0 ? (
        filteredQuotes.map((quote, index) => <li key={index}>{quote}</li>)
      ) : (
        <h3>No quotes match your search :( </h3>
      )}
    </ul>
  );
}

export default Items;
