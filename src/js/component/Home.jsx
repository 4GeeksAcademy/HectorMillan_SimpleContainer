import React, {useState} from "react";
import {SimpleContainer} from "./SimpleContainer.jsx";
import Input from "./Input.jsx";



//include images into your bundle


//create your first component
const Home = () => {

	const [valor, setValor] = useState("");

	const cambiarValorInput = (e) => {
		setValor(e.target.value);
	  };

	return (
		<div className="container">
		
			<SimpleContainer/>
			
			
			
		</div>
	);
};

export default Home;
