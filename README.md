# Lista de tareas por hacer

Esta es una aplicaión de consola para manejar lista de tareas por hacer hecha en NodeJS

## Instalación

```
$ npm install
```

## Uso

### Crear

Para crear una nueva tarea se debe usar el comando **crear** seguido del argumento **--descripcion** o el alias **-d**

```
$ node app crear --descripcion "Salir a caminar"
$ node app crear -d "Tomar 2 listros de agua"
```

### Listar

Para listar todas las tareas guardadas de usa el comando **listar**

```
$ node app listar
```

### Actualizar

Para cambiar el estado de la tarea *completada o no* se usa el comando **actualizar** con el argumentos *--descripcion o -d* y el argumento *--completada o -c* con el valor ***true*** para completada o  ***false*** para cambiar a no completada. Por defecto el argumento de completada es **true**.

```
$ node app actualizar -d "Salir a caminar" -c true
es igual que
$ node app actualizar -d "Salir a caminar"
marcar como no completada
$ node app actualizar -d "Tomar 2 listros de agua" -c false
```

### Borrar

Para borrar se usa el comando **borrar** seguido con el argumento ***--descripcion o -d*** con la descripción de la tarea que se eliminará:

```
$ node app borrar -d "Salir a caminar"
```

## Version 1.0.0