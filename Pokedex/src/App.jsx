import Logo from './img/pokemon-logo.png'

import './App.css'
import { Header } from './Components/Header'
import { Card } from './Components/Card'

function App() {
 
  let URL = 'https://pokeapi.co/api/v2/pokemon/';

  for (let i = 1; i <= 151; i++){
    fetch(URL + i)
    .then((resp ) => resp.json())
    .then(data => mostrarPokemon(data))
  }

  function mostrarPokemon(data){
    const div = document.createElement("div")
    div.classList.add('pokemon');
    div.innerHTML = <Card/> 
    listaPokemon.append(div)
  }

  return (
    <>
      <Header/>
      <main class="p-2 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 gap-4">
        <Card/>  
        <Card/>  


      </main>
    </>
  )
}

export default App
