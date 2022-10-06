import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea]=useState("");
	const [listaTareas, setListaTareas]=useState([]);

	const handleSubmit = (e) => { 
		e.preventDefault()
		setTarea("");
	}
	const handleClick = () => {

		if (!tarea == "") {
			setListaTareas([...listaTareas, tarea])
		}
		else {
			return (
			alert("No hay tareas, agrega una tarea")
			)
		}
	}
	const handleRemoveTarea = (id) => {
		// console.log(id)
		setListaTareas(listaTareas.filter((item,index)=>index !== id))
	}

	console.log(listaTareas);
	return (

	<form className="container-fluid" onSubmit={handleSubmit} style={{width : "30rem", height: "30rem", float: "left"}}>
	<div className="mb-3">
		<label className="form-label mt-3"><h1>TODO</h1></label>
		<input maxLength={"25"} onChange={(e) => setTarea(e.target.value)} value={tarea} placeholder="Anota tu tarea" type="text" className="form-control" id="tarea"/>
	</div>
	<button type="submit" onClick={handleClick} className="btn btn-primary">New Task</button>
	<ul className="list-group mt-3">
	{listaTareas.map((tarea, i) => 
	<li className="tarea-none list-group-item list-group-item-light p-2" key={i}>
	<button type="button" onClick={() => handleRemoveTarea(i)}  className="btn-close" style={{float: "right"}}></button>
	<h3>{tarea}</h3></li>)}
	<li className="list-group-item list-group-item-light d-inline-flex p-2">Tareas a hacer: {listaTareas.length}</li>
	</ul>
	</form>
	);
};

export default Home;