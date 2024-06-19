export function Card({ id, name, types, height, weight, image }) {
    return (
      <div className="pokemon bg-slate-100 rounded-lg img-svg">
        <p className="text-left m-2 font-bold text-2xl">N°#{id.toString().padStart(3, '0')}</p>
        <div className="pokemon-tipos grid grid-cols-3">
          {types.map((type, index) => (
            <p key={index} className={`tipo bg-${type.color} font-bold py-1 rounded-r-lg border-2 border-gray-950`}>
              {type.name.toUpperCase()}
            </p>
          ))}
        </div>
        <div>
          <img
            src={image}
            alt={`Imagen de ${name}`}
            className="col-span-1 sombra"
          />
        </div>
        <div className="pokemon-info">
          <div className="nombre-contenedor m-2">
            <h2 className="pokemon-nombre text-white text-4xl font-bold">{name}</h2>
          </div>
          <div className="pokemon-stat grid grid-cols-3">
            <p className="col-span-2"></p>
            <p className="stat bg-gray-500 font-bold py-1 rounded-l-lg border-2 border-gray-950">{height}M</p>
            <p className="col-span-2"></p>
            <p className="stat bg-gray-500 font-bold py-1 rounded-l-lg border-2 border-gray-950">{weight}Kg</p>
          </div>
        </div>
      </div>
    );
  }
  