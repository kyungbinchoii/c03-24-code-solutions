export function PokemonList() {
  const pokedex = [
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' },
  ];
  return (
    <div>
      <h3>Pokémon List</h3>
      <ul>
        {pokedex.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
