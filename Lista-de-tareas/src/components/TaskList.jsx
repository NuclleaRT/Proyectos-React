
export function TaskList ({task, removeTaks}){
    return (
        <ul className="list-group">
            {task.map((task, index)=> (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {task} <button onClick={() => removeTaks(index)} className="btn btn-danger btn-sm">Eliminar</button>           
                </li>
             ))}
        </ul>
    )
}