import '../style/Botones.css'

export function Botones (props){

    const esOperador = valor =>{
       return isNaN(valor) && (valor !== '.' ) && (valor !== '=')
    }

    return(

        <div 
        className={`boton-contenedor ${esOperador(props.children)? 'operador' : ''}`.trimEnd()}
        // se define funcion anonima para que enviar el valor del boton 
        onClick={() => props.manejarClick(props.children)}    
        >
            {props.children}

        </div>
    )
}