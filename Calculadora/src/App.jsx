import logo from './img/Arlecc.png' 
import './App.css'
import { Pantalla } from './Components/Pantalla'
import { Botones } from './Components/Botones'
import React, {useEffect, useState} from 'react'

function App() {
  const manejarClick = () => {

  }

  let numero = 1
  
  function calcular (n){
    if(numero < n){return 'hola'}

    
    console.log(numero)
    numero = numero + 1
    calcular(n - 1)
  }

  calcular(3)
  

  const [users, setUsers] = useState ([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(respuesta => respuesta.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error))
  },[])

  return (
    <>
      <div className='App'>
        <div className='container-logo'>
          <img 
            className='logo'
            src={logo} 
            alt="Logo de calculadora"
           />
        </div>       
        <div className='container-btn'>
          <ul className='lista'>
              {users.map(user => (
                <li key={user.id} >{user.username}</li>
              ))}
          </ul>

          <div className='grupos'>
            <Botones nombreBtn={manejarClick}>7</Botones>
            <Botones nombreBtn={manejarClick}>8</Botones>
            <Botones nombreBtn={manejarClick}>9</Botones>
            <Botones nombreBtn={manejarClick}>/</Botones>                     
          </div>
        
          <div className='grupos'>
            <Botones nombreBtn={manejarClick}>4</Botones>
            <Botones nombreBtn={manejarClick}>5</Botones>
            <Botones nombreBtn={manejarClick}>6</Botones>
            <Botones nombreBtn={manejarClick}>*</Botones>                     
          </div>
        
          <div className='grupos'>
            <Botones nombreBtn={manejarClick}>1</Botones>
            <Botones nombreBtn={manejarClick}>2</Botones>
            <Botones nombreBtn={manejarClick}>3</Botones>
            <Botones nombreBtn={manejarClick}>-</Botones>                     
          </div>
          
          <div className='grupos'>
            <Botones nombreBtn={manejarClick}>0</Botones>
            <Botones nombreBtn={manejarClick}>.</Botones>
            <Botones nombreBtn={manejarClick}>+</Botones>
            <Botones nombreBtn={manejarClick}>=</Botones>                     
          </div>
        </div>
      </div>
    </>
  )
}

export default App
