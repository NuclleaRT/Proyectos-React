

export function PokemonInfo ({pokemonData}){

    return (
        <div>
            <ul>
                <img src={pokemonData.sprites.other["official-artwork"].front_default} alt={pokemonData.name} />
            </ul>
            <p>ID: {pokemonData.id}</p>
            <p>Name: {pokemonData.name}</p>
            <p>Weight: {pokemonData.weight}</p>
            <p>Types:</p>
            <ul>
                {pokemonData.types.map((types, index) => (<li key={index}>{types.type.name}</li>))}
            </ul>
        </div>
    )
}