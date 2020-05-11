const opts = {
    descripcion: {
        demand: true, //para colocarlo obligatorio
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer',

    },
}
const completado = {
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o Pendiente la tarea',
    },
}



const argv = require('yargs')
    .command('borrar', 'Borra la posicion en un arreglo', opts)
    .command('crear', 'Crea una cosa por hacer', opts)
    .command('actualizar', 'Actualiza una cosa por hacer', opts, completado)
    .help()
    .argv;


module.exports = {
    argv
}