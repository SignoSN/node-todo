const fs = require("fs");
const colors = require("colors");

let todos = [];

let crear = (descripcion) => {
	cargar();

	let tarea = {
		descripcion,
		completado: false
	}

	todos.push( tarea );

	guardar();

	return tarea;
}

let guardar = () => {

	let data = JSON.stringify(todos);

	fs.writeFile('./db/tareas.json', data, (err) => {
		if(err)
			console.log(err);
		else
			console.log("Tarea Guardada".brightCyan);
	});
}

let cargar = () => {
	try{
		todos = require("../db/tareas.json");	
	}catch(err){
		todos = [];
	}
	
}

let listar = () => {
	cargar();
	return todos;
}

let actualizar = (descripcion, completado = true) => {
	cargar();

	let index = todos.findIndex( tarea => tarea.descripcion === descripcion);

	if( index >= 0 ){
		todos[index].completado = completado;
		guardar();
		return true;
	}else{
		return false;
	}
}

let borrar = (descripcion) => {
	cargar();
	let index = todos.findIndex( tarea => tarea.descripcion === descripcion);
	if( index >= 0 ){
		todos.splice(index, 1);
		guardar();
		return true;
	}else{
		return false;
	}
}


module.exports = {
	crear,
	listar,
	actualizar,
	borrar
}