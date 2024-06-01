import '../style/BotonClear.css'

export function BotonClear(props){
    return (
        <div 
            className="boton-clear" onClick={props.manejarClear}>
            {props.children}
        </div>
    )
}