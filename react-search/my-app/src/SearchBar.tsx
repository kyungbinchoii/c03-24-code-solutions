type Props = {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({ searchTerm, handleSearchChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
}
export default SearchBar;
