// ==== PAR O IMPAR ====

function parImpar() {
    let userInputNumber = prompt('ingrese un número')

    if(userInputNumber % 2 === 0) {
        console.log('el número ingresado es par')
    } else {
        console.log('el número ingresado es impar')
    }
}


// ==== PROMEDIO ====

function promedio(alumnos, estado) {

    let alumnosSeleccionados = [];

    for(let i = 0; i < alumnos.length; i++) {

        let promedio = obtenerPromedio(alumnos[i].notas)

        /*
        let sumaDeNotas = 0;
        for(let j = 0; j < alumnos[i]['notas'].length; j++) {
            sumaDeNotas += alumnos[i]['notas'][j]
        }
        let promedio = sumaDeNotas / alumnos[i]['notas'].length;
        
        */

        if(estado === 'aprobado') {
            if(promedio >= 6) {
                let alumno = {}
                alumno['nombreCompleto'] = alumnos[i]['nombre'] + ' ' + alumnos[i]['apellido'];
                alumno['promedio'] = promedio;
                alumno['estado'] = estado;
                alumnosSeleccionados.push(alumno)
            }
        } else if (estado === 'desaprobado'){
            if(promedio < 6) {
                let alumno = {}
                alumno['nombreCompleto'] = alumnos[i]['nombre'] + ' ' + alumnos[i]['apellido'];
                alumno['promedio'] = promedio;
                alumno['estado'] = estado;
                alumnosSeleccionados.push(alumno)
            }
        } else {
            console.log('el estado solicitado no es válido, debe ser aprobado o desaprobado');
            return
        }
    }
    
    return alumnosSeleccionados;

}

function obtenerPromedio(arrayDeNotas) {
    let sumaDeNotas = 0;
    for(let i = 0; i < arrayDeNotas.length; i++) {
        sumaDeNotas += arrayDeNotas[i];
    }
    return sumaDeNotas / arrayDeNotas.length;
}

function crearAlumno(propiedad)

let alumnos = [
    {
      nombre: "Mariano Damian",
      apellido: "Hernandez",
      notas: [8, 7, 9, 10, 6],
    },
    {
      nombre: "Ramiro",
      apellido: "Diaz",
      notas: [1, 3, 8, 2, 1],
    },
    {
      nombre: "Ana",
      apellido: "Armella",
      notas: [5, 7, 9, 4, 2],
    },
    {
      nombre: "Romina",
      apellido: "Almeda",
      notas: [10, 6, 7, 5, 9],
    },
    {
      nombre: "Denis",
      apellido: "Tolaba",
      notas: [10, 10, 9, 9, 10],
    },
    {
      nombre: "Hugo",
      apellido: "Castellano",
      notas: [2, 3, 3, 6, 1],
    },
    {
      nombre: "Analia Daiana",
      apellido: "Fonseca",
      notas: [4, 3, 4, 5, 2],
    },
    {
      nombre: "Francisco Daniel",
      apellido: "Samir",
      notas: [5, 5, 6, 4, 2],
    },
  ];
  
  console.log(promedio(alumnos, "aprobado"))
  //DEBERÁ RETORNAR 
  /*
  [
    { nombreCompleto: "Mariano Damian Hernandez", promedio: 8, estado: "aprobado" },
    { nombreCompleto: "Romina Almeda", promedio: 7, estado: "aprobado" },
    { nombreCompleto: "Denis Tolaba", promedio: 10, estado: "aprobado" },
  ];
  */