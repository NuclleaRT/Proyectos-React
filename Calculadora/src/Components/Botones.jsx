import '../style/Boton.css'

export function Botones (props){
    const esOperador = (valor) =>{
        return isNaN(valor) && (valor !== '.') && (valor !=='=')
    }

    return (
        <div
         className={`btn-contenedor ${esOperador(props.children)? 'operador': ''}`.trim()}
         onClick={() => props.manejarClick(props.children)}
        >
            {props.children}

        </div>
    )
}