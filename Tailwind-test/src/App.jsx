
import './App.css'

function App() {
  

  return (
    <>
    
    <div className='App' class="mx-auto">
      <div class="card grid grid-cols-4">
        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/7/7b/latest/20180530163133/Artwork_Pikachu_LGPE.png"
             alt="imagen de pikachu"
             class=" w-24 rounded-full " />
        <div class="col-span-2">
          <h3 class="font-bold text-2xl ">Pikachu - Pokemon</h3>
          <p class="">Vive en grupo en los bosques. Almacena electricidad en las bolsas de sus mejillas. 
              A veces utiliza la electricidad de sus mejillas para recargar a un Pikachu amigo 
              que esté débil. Este inteligente Pokémon tuesta las duras bayas con electricidad 
              para hacerlas más comestibles.
          </p>
        </div>
        <div class="text-3xl font-bold border-l-4 border-l-slate-600 ml-10 p-5">
          <div class="mb-5">Tipo</div>
          <div class="bg-yellow-300 rounded-lg">Electrico</div>
          <div></div>
        </div>
      </div>


    </div>
      
    

    </>
  )
}

export default App
