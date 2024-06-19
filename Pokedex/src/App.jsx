import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Card } from './Components/Card';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const details = await response.json();

            return {
              id: details.id,
              name: details.name,
              types: details.types.map((typeInfo) => ({
                name: typeInfo.type.name,
                color: getTypeColor(typeInfo.type.name),
              })),
              height: details.height / 10,
              weight: details.weight / 10, 
              image: details.sprites.other['official-artwork'].front_default,
            };
          })
        );

        setPokemons(detailedPokemons);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const getTypeColor = (typeName) => {
    // Define your type color mapping here
    const colors = {
      electric: 'yellow-400',
      dragon: 'blue-700',
      fire: 'orange-400',
      water: 'blue-400',
      grass: 'green-400',
      ice: 'teal-400',
      fighting: 'red-600',
      poison: 'purple-400',
      ground: 'amber-700',
      flying: 'indigo-400',
      psychic: 'red-400',
      bug: 'lime-400',
      rock: 'rock',
      ghost: 'indigo-800',
      dark: 'slate-800',
      steel: 'cyan-700',
      fairy: 'pink-400',
      normal: 'slate-400'   
    };
    return colors[typeName] || 'gray-500';
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <main className="p-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 gap-4" id="listaPokemon">
        {pokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            height={pokemon.height}
            weight={pokemon.weight}
            image={pokemon.image}
          />
        ))}
      </main>
    </>
  );
}

export default App;

