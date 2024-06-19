
import { useEffect, useState } from 'react'
import Pokemon from '../img/pokemon-logo.png'
import Card from './Card'

const [pokeInfo, setPokeInfo] = useState([])


const typePokemon = (num) => {
    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response = await fetch(`https://pokeapi.co/api/v2/type/${num}`)
                const data = await response.json()

                const detailsType = await Promise.all(
                    data.pokemon.map(async (namePoke) => {
                        const response = await fetch(namePoke.url)
                        const details = await response.json()

                        return{
                            id: details.id,
                            name: details.name,
                            image: details.sprites.other['official-artwork'].front_default,
                            type: details.types.map((typeInfo) => ({
                                name: typeInfo.type.name,
                                color: getTypeColor(typeInfo.type.name),
                            })),
                            weight: details.weight,
                            height: details.height
                        }
                    })
                )
                setPokeInfo(detailsType)
            }catch(error){
                console.error(error)
            }
        }
        fetchData();
    },[]);

     const getTypeColor = (typeName) => {
    
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

}



export function Header (){
    return(        
        <nav>
            <img src={Pokemon} alt="logo pokemon" class="w-36 "/>
            <ul class="hidden md:grid lg:grid-cols-10  md:grid-cols-6 sm:grid-cols-3"> 
                <li class="card"><button class="" id="ver-todos">Ver Todos</button></li>
                <li class="card bg-slate-400"><button onClick={typePokemon(1)} class="" id="ver-todos">Normal</button></li>
                <li class="card bg-orange-400"><button onClick={typePokemon(10)} class="" id="ver-todos">Fire</button></li>
                <li class="card bg-blue-400"><button onClick={typePokemon(11)} class="" id="ver-todos">Water</button></li>
                <li class="card bg-green-400"><button onClick={typePokemon(12)} class="" id="ver-todos">Grass</button></li>
                <li class="card bg-yellow-400"><button onClick={typePokemon(13)} class="" id="ver-todos">Electric</button></li>
                <li class="card bg-teal-400"><button onClick={typePokemon(15)} class="" id="ver-todos">Ice</button></li>
                <li class="card bg-red-600"><button onClick={typePokemon(2)} class="" id="ver-todos">Fighting</button></li>
                <li class="card bg-purple-400"><button onClick={typePokemon(4)} class="" id="ver-todos">Poison</button></li>
                <li class="card bg-amber-700"><button onClick={typePokemon(5)} class="" id="ver-todos">Ground</button></li>
                <li class="card bg-indigo-400"><button onClick={typePokemon(3)} class="" id="ver-todos">Flying</button></li>
                <li class="card bg-red-400"><button onClick={typePokemon(14)} class="" id="ver-todos">Psychic</button></li>
                <li class="card bg-lime-400"><button onClick={typePokemon(7)} class="" id="ver-todos">Bug</button></li>
                <li class="card bg-rock"><button onClick={typePokemon(6)} class="" id="ver-todos">Rock</button></li>
                <li class="card bg-indigo-800"><button onClick={typePokemon(8)} class="" id="ver-todos">Ghost</button></li>
                <li class="card bg-slate-800"><button onClick={typePokemon(17)} class="" id="ver-todos">Dark</button></li>
                <li class="card bg-blue-700"><button onClick={typePokemon(16)} class="" id="ver-todos">Dragon</button></li>
                <li class="card bg-cyan-700"><button onClick={typePokemon(9)} class="" id="ver-todos">Steel</button></li>
                <li class="card bg-pink-400"><button onClick={typePokemon(18)} class="" id="ver-todos">Fairy</button></li>
            </ul>

        </nav>
     
    )
}