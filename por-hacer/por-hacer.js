const fs = require('fs');

let listadoPorHacer = [];


const guardarDB = () => {


    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('aqui entro');
            return;
        } else {
            return `Creado Con exito`;
        }
    })
    return 'Creado Con exito';

}


const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

    //console.log(listadoPorHacer);

}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false

    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}


const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true
    } else {
        return false;
    }


}

const borrar = (descripcion) => {
    cargarDB();
    let Nuevolistado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (Nuevolistado.length == listadoPorHacer.length) {
        return false
    } else {
        listadoPorHacer = Nuevolistado;
        guardarDB();
        return true;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
}