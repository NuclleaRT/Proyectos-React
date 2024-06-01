
import './App.css'
import { Pantalla } from './Components/Pantalla'
import { Botones } from './Components/Botones'
import React, {useEffect, useState} from 'react'
import { BotonClear } from './Components/BotonClear'
import {evaluate} from 'mathjs'; 

function App() {

  const [input, SetInput] = useState('')

  const click = val =>{
    SetInput(input + val);
  }
  const Clear = () =>{
    SetInput('');
  }
  
  //installa el paquete mathjs 
  const calcularResultado = () => {
    //comprobamos si hay algun valor ingresado en pantalla
    if(input){
      SetInput(evaluate(input));
    }else{
      alert('Ingrese algun valor antes de calcular un resultado');
    }
   
  }

 return (

  <div className='App'>
    <div className='contenedor-calculadora'>

   
      <Pantalla input={input}/>
      
     <div className='fila'>
      <Botones manejarClick={click} >7</Botones>
      <Botones manejarClick={click}>8</Botones>
      <Botones manejarClick={click}>9</Botones>
      <Botones manejarClick={click}>/</Botones>
     </div>
     <div className='fila'>
      <Botones manejarClick={click}>4</Botones>
      <Botones manejarClick={click}>5</Botones>
      <Botones manejarClick={click}>6</Botones>
      <Botones manejarClick={click}>*</Botones>
     </div>
     <div className='fila'>
      <Botones manejarClick={click}>1</Botones>
      <Botones manejarClick={click}>2</Botones>
      <Botones manejarClick={click}>3</Botones>
      <Botones manejarClick={click}>-</Botones>
     </div>
     <div className='fila'>
      <Botones manejarClick={click}>0</Botones>
      <Botones manejarClick={click}>.</Botones>
      <Botones manejarClick={calcularResultado}>=</Botones>
      <Botones manejarClick={click}>+</Botones>
     </div>
    
      <BotonClear manejarClear={Clear} >Clear</BotonClear>
    </div>
  </div>
 )
}

export default App
