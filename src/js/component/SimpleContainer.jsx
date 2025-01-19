import React, { useState, useEffect } from 'react';
import Input from "./Input";
import ReactDOM from 'react-dom'


/*

const RellenarContador = () => {
    let inputElement = document.getElementById("inputB"); 
   if (inputElement) {
       const value = inputElement.value; 
       longitud = inputElement.value;
       console.log("Pulsado. Valor actual del input:", value); 
   } else {
       console.error("El elemento con ID 'contador-input' no existe.");
   } 
};
*/



export const SimpleContainer = () => {
    
  const [count1, setCount] = useState(0);
  const [longitud, setLongitud] = useState(1);
  const inputElement = document.getElementById("inputB");

  const manejarCambioInput = (valor) => {
    
        
          longitud = setLongitud(valor);

      
    
         // Calculamos la longitud del texto ingresado

  };
 
   
  
  useEffect(() => {
    // Crear un intervalo que incrementa el contador cada segundo
    const interval = setInterval(() => {

        
        setCount((prevCount) => prevCount + 1);
             
       
    }, 1000);

    
    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []); // Lista de dependencias vacía: este efecto se ejecuta una vez al montar el componente

        let digits = [""];

        
         digits = count1.toString().padStart(longitud, '0').split('');
       


  return (

        <div>
          <h1>Contador digital</h1>
          <p>Introduce longitud de digitos</p>
          <Input onChange={manejarCambioInput} />
          
            <div className='container d-flex margin-auto mt-3 justify-content-center'>

                {digits.map((digit, index) => (
                <p className="text-bg-secondary p-3 rounded text-align-center fs-3 p-2">
                  {digit}
                </p>
))}

</div>
          
        </div>
    /*
    <div className='container d-flex margin-auto mt-3 justify-content-center'>

        {digits.map((digit, index) => (
                <p key={index} className="text-bg-secondary p-3 rounded text-align-center fs-3 p-2">
                    {digit}
                </p>
        ))}

    </div>

       {
    */
  );
};



/* 
      <p className="text-bg-secondary p-3 rounded text-align-center fs-3 p-2"> {count1.toString().padStart(6, '0').split('')[0]}</p>
      <p className="text-bg-secondary p-3 rounded text-align-center fs-3 p-2"> {count1.toString().padStart(6, '0').split('')[1]}</p>
      <p className="text-bg-secondary p-3 rounded text-align-center fs-3 p-2"> {count1.toString().padStart(6, '0').split('')[2]}</p>
      <p className="text-bg-secondary p-3 rounded text-align-center fs-3 p-2"> {count1.toString().padStart(6, '0').split('')[3]}</p>
      <p className="text-bg-secondary p-3 rounded text-align-center fs-3 p-2"> {count1.toString().padStart(6, '0').split('')[4]}</p>
      <p className="text-bg-secondary p-3 rounded text-align-center fs-3 p-2"> {count1.toString().padStart(6, '0').split('')[5]}</p>
      }
   
    */