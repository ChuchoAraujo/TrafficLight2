import React from "react";
import { useState, useDebugValue } from "react";
//include images into your bundle


//create your first component
const Home = () => {

	const [color, setColor] = useState("")


	return (
		<div className="contenedor-principal container">
			<div className="light-contenedor">
				<div 
				className={(color === "red" ? "light red shine" : "light red")}
				onClick= { () => setColor("red") }>
				</div>
			    <div 
				className= {(color === "yellow" ? " light yellow shine" : "light yellow")}
				onClick= { () => setColor("yellow") }>
				</div>
			    <div 
				className={(color === "green" ? " light green shine" : "light green")}
				onClick= { () => setColor("green") }>
				</div>
			</div>
			

		</div>
	);
};

export default Home;
