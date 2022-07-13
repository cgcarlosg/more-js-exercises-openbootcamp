class Estudiante {
    constructor(nombre, asig1, asig2, asig3) {
        this.nombre = nombre;
        this.asignaturas = [asig1, asig2, asig3];
    }

    obtenDatos() {
        return ({
            "nombre": this.nombre,
            "asignaturas": this.asignaturas
        });
    }
}

const nuevo_estudiante = new Estudiante('carlos','html', 'js', 'css');
let estudiante_02 = new Estudiante('diana','html', 'js', 'css');
let datos = estudiante_02.obtenDatos();
console.log(datos);