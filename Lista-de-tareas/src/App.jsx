import { useState } from 'react'

import './App.css'
import { TaskList } from './components/TaskList'

function App() {
  const [task, setTask] = useState([])
  const [inputValue,setInputValue] = useState('')

  const addTask = () =>{
    if(inputValue !== ''){
      setTask([...task, inputValue])      
      setInputValue('')
    }
  }

  const removeTaks = (index) =>{
    const newTask = task.filter((task, i) => i !== index)
    setTask(newTask)
  }

  
  return (
    <>
    <div className='container mt-5'>
      <div className='row'>
        <div className="col-md-6 offset-md-3">
          <h1 className='text-center mb-4'>Lista de Tareas</h1>
          <div className='input-group mb-3'>

          
          <input 
            type="text"
            className='form-control'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className='btn btn-primary' onClick={addTask}>
            Agregar
          </button>
          </div>
            <TaskList task={task} removeTaks={removeTaks}/>
        </div>    
      </div>
    </div>
     

    </>
  )
}

export default App
