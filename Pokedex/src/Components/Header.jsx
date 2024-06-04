import Pokemon from '../img/pokemon-logo.png'

export function Header (){
    return(        
        <nav>
            <img src={Pokemon} alt="logo pokemon" class="w-36 "/>
            <ul class="grid lg:grid-cols-10 md:grid-cols-6 sm:grid-cols-3"> 
                <li class="card"><button class="" id="ver-todos">Ver Todos</button></li>
                <li class="card bg-slate-400"><button class="" id="ver-todos">Normal</button></li>
                <li class="card bg-orange-400"><button class="" id="ver-todos">Fire</button></li>
                <li class="card bg-blue-400"><button class="" id="ver-todos">Water</button></li>
                <li class="card bg-green-400"><button class="" id="ver-todos">Grass</button></li>
                <li class="card bg-yellow-400"><button class="" id="ver-todos">Electric</button></li>
                <li class="card bg-teal-400"><button class="" id="ver-todos">Ice</button></li>
                <li class="card bg-red-600"><button class="" id="ver-todos">Fighting</button></li>
                <li class="card bg-purple-400"><button class="" id="ver-todos">Poison</button></li>
                <li class="card bg-amber-700"><button class="" id="ver-todos">Ground</button></li>
                <li class="card bg-indigo-400"><button class="" id="ver-todos">Flying</button></li>
                <li class="card bg-red-400"><button class="" id="ver-todos">Psychic</button></li>
                <li class="card bg-lime-400"><button class="" id="ver-todos">Bug</button></li>
                <li class="card bg-rock"><button class="" id="ver-todos">Rock</button></li>
                <li class="card bg-indigo-800"><button class="" id="ver-todos">Ghost</button></li>
                <li class="card bg-slate-800"><button class="" id="ver-todos">Dark</button></li>
                <li class="card bg-blue-700"><button class="" id="ver-todos">Dragon</button></li>
                <li class="card bg-cyan-700"><button class="" id="ver-todos">Steel</button></li>
                <li class="card bg-pink-400"><button class="" id="ver-todos">Fairy</button></li>
            </ul>

        </nav>
     
    )
}