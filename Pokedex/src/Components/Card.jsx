


export function Card ({ id, nombre, tipo, imagen, altura, peso}){
    return(
        <div class="pokemon bg-slate-100 rounded-lg img-svg">
            
            <p class="text-left m-2 font-bold text-2xl">N°#{id}</p>
            <div class="pokemon-tipos grid grid-cols-3">
                    <p class="col-span-2"></p>
                    <p className="tipo  bg-yellow-400 font-bold  py-1 rounded-l-lg border-2 border-gray-950 ">ELECTRIC</p>
                    <p class="col-span-2"></p>
                    <p className="tipo bg-blue-700 font-bold  py-1 rounded-l-lg border-2 border-gray-950 ">DRAGON</p>
            </div>
            <div class="">
                
                <img 
                    src={imagen} 
                    alt="imagen Pokemon" 
                    class="col-span-1  sombra"/>
                    
                
            </div>
            <div class="pokemon-info" >
                <div class="nombre-contenedor  m-2">                    
                    <h2 class="pokemon-nombre text-white text-4xl font-bold">{nombre}</h2>
                </div>

                
                <div class="pokemon-stat grid grid-cols-3">
                    <p class="col-span-2"></p>
                    <p className="stat bg-gray-500 font-bold  py-1 rounded-l-lg border-2 border-gray-950 ">{altura}</p>
                    <p class="col-span-2"></p>
                    <p className="stat bg-gray-500 font-bold  py-1 rounded-l-lg border-2 border-gray-950 ">{peso}Kg</p>
            </div>
            </div>
        </div>
    )
}