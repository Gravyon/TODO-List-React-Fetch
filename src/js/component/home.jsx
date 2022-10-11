import React, {useState, useEffect} from "react";

//create your first component
const Home = () => {
	const [tarea, setTarea]=useState({label : tarea, done : false});
	const [listaTareas, setListaTareas]=useState([]);

	const crearUsuario = async ()=>{
		try {
			const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/daniel95', {
			method:"POST",
			body: JSON.stringify([]),
			headers: {
				'Content-Type': "application/json"
			}
		})
		const data = await response.json();
		console.log(data)
		// setListaTareas(data)
		} catch (err){
		console.log(err)
		}
	}
	
	const getListaTareas = async () => {
		try{
			const response = await fetch ('https://assets.breatheco.de/apis/fake/todos/user/daniel95')
			const data = await response.json()
			// console.log(data);
			console.log(data)
			setListaTareas(data)
		} catch(err){
			console.log(err)
	}
}
	// const  updateListaTareas = ()=> {
	// 	fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
    //   method: "PUT",
    //   body: JSON.stringify(listaTareas),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    // .then(resp => {
    //     console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
    //     console.log(resp.status); // el código de estado = 200 o código = 400 etc.
    //     console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
    //     return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
    // })
    // .then(data => {
    //     //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
    //     console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
    // })
    // .catch(error => {
    //     //manejo de errores
    //     console.log(error);
    // });

	// }
	const  updateListaTareas = async ()=> {
		try {
			const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/daniel95', {
				method: "PUT",
				body: JSON.stringify(listaTareas),
				headers: {
				  "Content-Type": "application/json"
				}
			  })
			  const data = await response.json();
				 console.log(data);
			}catch(error) {
				//manejo de errores
				console.log(error);
			}	
	}
			
	// const deleteUsuario = async ()=>{
	// 	try {
	// 		const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/daniel95', {
	// 		method:"DELETE",
	// 		body: JSON.stringify([]),
	// 		headers: {
	// 			'Content-Type': "application/json"
	// 		}
	// 	})
	// 	const data = await response.json();
	// 	console.log(data)
	// 	// setListaTareas(data)
	// 	} catch (err){
	// 	console.log(err)
	// 	}
	// }

	const handleSubmit = (e) => { 
		e.preventDefault()
		setTarea("");
		

	}
	const addTarea = () => {

		if (!tarea == "") {
			setListaTareas([...listaTareas, {label : tarea, done : false}])
			// setListaTareas([...listaTareas, {tarea}])
		}
		//{label : tarea, done : false}
		else {
			return (
			alert("No hay tareas, agrega una tarea")
			)
		}
		setTarea("");
	}
	const handleRemoveTarea = (id) => {
		// console.log(id)
		setListaTareas(listaTareas.filter((item,index)=>index !== id))
	}

	// console.log(listaTareas);

	useEffect(()=>{
		getListaTareas()
	},[])

	useEffect(()=>{
		updateListaTareas()
	},[listaTareas])

	return (

	<form className="container-fluid" onSubmit={handleSubmit} style={{width : "30rem", height: "30rem", float: "left"}}>
	<div className="mb-3">
		<label className="form-label mt-3"><h1>TODO</h1></label>
		<input maxLength={"25"} onChange={(e) => setTarea(e.target.value)} value={tarea.label}  placeholder="Anota tu tarea" type="text" className="form-control" id="tarea"/>
	</div>
	<button type="submit" onClick={addTarea} className="btn btn-primary">New Task</button>
	<ul className="list-group mt-3">
	{/* {listaTareas.map((item, index) => { <li className="tarea-none list-group-item list-group-item-light p-2" key={index}>
	<button type="button" onClick={() => handleRemoveTarea(i)}  className="btn-close" style={{float: "right"}}></button>
	<h3>{item.label}</h3></li> })} */}
	{listaTareas.map((tarea, i) => 
	<li className="tarea-none list-group-item list-group-item-light p-2" key={i}>
	<button type="button" onClick={() => handleRemoveTarea(i)}  className="btn-close" style={{float: "right"}}></button>
	<h3>{tarea.label}</h3></li>)}
	<li className="list-group-item list-group-item-light d-inline-flex p-2">Tareas a hacer: {listaTareas.length}</li>
	</ul>
	</form>
	);
};

export default Home;