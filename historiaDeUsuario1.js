
const cursos = [
    {
        id: 1,
        nombre: 'Inglés nivel 1',
        duracion: 60,
        valor: 410000
    },
    {
        id: 2,
        nombre: 'Interpretación de pruebas genéticas en procesos judiciales',
        duracion: 48,
        valor: 295000
    },
    {
        id: 3,
        nombre: 'Escuela de iniciación deportiva',
        duracion: 100,
        valor: 135000
    }
];

let listarCursos = (callback) => {
    console.log('\nInformación de cursos disponibles:');
    let t = 1;
    cursos.forEach((item) => {
        callback(item.id, item.nombre, item.duracion, item.valor, t++);
    });
}

if (require.main === module) {
    listarCursos((id, nombre, duracion, valor, t) => {
        setTimeout(() => {
            console.log('__________________________________');
            console.log('Id del curso: ' + id);
            console.log('Nombre del curso: ' + nombre);
            console.log('Duración: ' + duracion + " horas");
            console.log('Inversión: $' + valor);
        }, t*2000);
    });
}

exports.cursos = cursos;