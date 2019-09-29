const argv = require("yargs")
.command('crear', 'Crea una tarea nueva', {
	descripcion: {
		alias: 'd',
		describe: 'Agrega una descripción a la tarea',
		demand: true,
	}
})
.command('listar', 'Muestra todas las tareas creadas')
.command('actualizar', 'Actualiza una tarea registrada', {
	descripcion: {
		alias: 'd',
		describe: 'Busca la tarea con esta descripción',
		demand: true,
	},
	completada: {
		alias: 'c',
		describe: 'Marca la tarea como completada',
		default: true
	}
})
.command('borrar', 'Borra una tarea con la descripcion dada', {
	descripcion: {
		alias: 'd',
		describe: 'Descripción de la tarea a borrar',
		demand: true,
	}
})
.help()
.argv


module.exports = {
	argv
}