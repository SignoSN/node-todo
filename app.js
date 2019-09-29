const colors = require("colors");
const argv = require("./config/yargs").argv;
const { crear, listar, actualizar, borrar } = require("./tareas/tareas");

// comandos

let comando = argv._[0];

switch(comando){
	case 'crear':
		let tarea = crear(argv.descripcion);
		console.log(tarea);
		break;
	case 'listar':
		//console.log('Lista de tareas');
		tareas = listar();
		console.log("=================Tareas=================".brightCyan);
		for(let tarea of tareas){
			console.log(tarea.descripcion.yellow);
			console.log("Estado:", tarea.completado);
			console.log("========================================".brightCyan);
		}
		break;
	case 'actualizar':
		let borrado = actualizar(argv.descripcion, argv.completada);
		console.log(borrado);
		break;
	case 'borrar':
		let res = borrar(argv.descripcion);
		console.log(res);
	default:
		console.log('Comando desconocido');
}