
const opciones = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    }
}

const fs = require('fs');
const {cursos} = require('./historiaDeUsuario1');
const argv = require('yargs')
    .command('inscribir', 'Seleccionar curso', opciones)
    .argv;

function buscarCurso() {
    return new Promise((resolved, reject) => {
        const course = cursos.find(item => item.id === argv.id);
        resolved(course);
    });
}

function crearArchivo(course) {
    if (course == undefined) {
        if (argv.nombre != undefined) {
            console.log('Ha ingresado una ID de usuario inválida...');
            console.log('Hola ' + argv.nombre + ', acá hay un listado de cursos que podrían interesarte: ');
        }
        console.log('Cursos disponibles:');
        console.log('____________________________________________________________________');
        cursos.forEach(element => {
            console.log('Id de curso: ' + element.id);
            console.log('Nombre: ' + element.nombre);
            console.log('Duración: ' + element.duracion + ' Horas');
            console.log('Inversión: $' + element.valor);
            console.log('____________________________________________________________________');
        });
        return;
    } 
    toSave = 'El estudiante ' + argv.nombre + ' se ha matriculado en' +
            ' el curso ' + course.nombre + ' que tiene una duración de ' +
            course.duracion + ' horas y un valor de $' + course.valor;
    fs.writeFile('informacion.txt', toSave, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Archivo creado');
    });
}

buscarCurso().then((course) => crearArchivo(course));



