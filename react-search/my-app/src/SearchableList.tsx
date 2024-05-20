import { useState } from 'react';
import SearchBar from './SearchBar';
import Items from './Items';

type Props = {
  quotes: string[];
};

export function SearchableList({ quotes }: Props) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredQuotes = quotes.filter((quote) =>
    quote.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />
      <Items filteredQuotes={filteredQuotes} />
    </div>
  );
}

export default SearchableList;
