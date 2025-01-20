import React, { useState, useEffect } from 'react';
import Input from "./Input";
import ReactDOM from 'react-dom'


export const SimpleContainer = () => {
    
  const [count1, setCount] = useState(0);
  const [longitud, setLongitud] = useState(1);
  

  const manejarCambioInput = (valor) => {
    
         // Calculamos la longitud del texto ingresado

          setLongitud(valor);

        
  };
    
  
  useEffect(() => {
    // Crear un intervalo que incrementa el contador cada segundo
    const interval = setInterval(() => {

        
        setCount((prevCount) => prevCount + 1);
            
       
    }, 1000);

    
   
    return () => clearInterval(interval);
  }, []); 

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
   
  );
};


