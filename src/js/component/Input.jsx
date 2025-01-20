import React from "react";

function Input({ onChange }) {
    
  const manejarCambio = (e) => {
    
    
            if (e.target.value == "0") {
                e.target.value = "1";
                

            } else {
            
            }

      const valor = e.target.value;
      onChange(valor); // Llamamos a la función pasada desde SimpleContainer
      
    
  };

  return (
    <input
      type="text"
      className="form-control"
      onChange={manejarCambio}
      placeholder="Escribe algo"
    />
  );
}

export default Input;
        

    