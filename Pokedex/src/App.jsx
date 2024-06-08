import { useState, useEffect } from 'react';

import './App.css'
import { Header } from './Components/Header'
import { Card } from './Components/Card'
import { PokemonInfo } from './Components/PokemonInfo';


function App() {
 
//   const [pokemonData, setPokemonData] = useState([]);
//   const [statePokemon, setStatePokemon] = useState(null);


//   //traer lista de pokemon
//   useEffect(() => {
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
//       .then((resp) => resp.json())
//       .then((data) => setPokemonData(data.results))
//       .catch((e) => console.error(' El fetch lista pokemon muestra un error: ',e))
//   },[])

//   //manejar click en el <li></li>
// const handleClick = (nombrePokemon) =>{
//   fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
//   .then((resp) => resp.json())
//   .then((data) => setStatePokemon(data))
//   .catch((error) => console.error('Error en el fetch handleClick: ', error))
// }
 


// const [search, setSearch] = useState('');

// const handleSearch = () =>{
//   handleClick(search.toLowerCase())
// }

  
  const [PokemonList, setPokemonList] = useState([]);

useEffect(() => {
  const fetchPokemonList = async () => {
    try{
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      const data = await response.json();
      
     
    const detallesPokemon = await Promise.all(
      data.results.map( async(pokemon) =>{
        const resp = await fetch(pokemon.url);
        const detalles = await resp.json();

        return{
          id: detalles.id,
          name: detalles.name,
          types: detalles.types.map((typeInfo) => typeInfo.type.name),
          altura: detalles.height,
          peso: detalles.weight,
          imagen: detalles.sprites.other['official-artwork'].front_default
        }
      })
    )
    setPokemonList(detallesPokemon);

    }catch (error){
      console.error('Error al usar FetchList: ', error)
    }
  }
  fetchPokemonList();
},[])



  return (
    <>
      <Header/>
      <main class="p-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 gap-4" id='listaPokemon'>
      <h1>Pokemon Information</h1>
        <ul>

         
   
        {/* {pokemonData.map((pokemon, index) => (
              <li key={index} onClick={() => handleClick(pokemon.name)}>
                {pokemon.name}
              </li>))}

              
                <input type="text" 
                  id=''
                  value={search} 
                  onChange={(e) => setSearch(e.target.value)} 
                  placeholder='ingrese un nombre'
                />
                <button onClick={handleSearch}>Buscar</button> */}
                
              
            

        </ul>
            {/* {statePokemon && <PokemonInfo pokemonData={statePokemon}/>} */}


      </main>
    </>
  )
}

export default App
