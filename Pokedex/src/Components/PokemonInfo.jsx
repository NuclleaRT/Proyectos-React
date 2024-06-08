

export function PokemonInfo ({pokemonData}){

    return (
        <div>
            <ul>
                <img src={pokemonData.imagen} alt={pokemonData.name} />
            </ul>
            <p>ID: {pokemonData.id}</p>
            <p>Name: {pokemonData.name}</p>
            <p>Height: {pokemonData.altura}</p>
            <p>Weight: {pokemonData.peso}</p>
            <p>Types:</p>
            <ul>
                {pokemonData.types.map((types, index) => (<li key={index}>{types}</li>))}
            </ul>
        </div>
    )
}