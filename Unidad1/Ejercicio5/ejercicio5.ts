// Crear una clase Cine que tenga los atributos privados película y horario. 
// ● Crear métodos públicos para la asignación y recuperación de valores. 
// ● Crear una instancia y asignarle valores. 
// ● Mostrar por pantalla los valores. 
// ● Crear una segunda instancia y asignarle valores. 
// ● Mostrar por pantalla los valores. 
// ● Cambiar los valores de la primera instancia. 
// ● Mostrar en pantalla los valores de ambas instancias; concluir que la instrucción new crea 
// objetos distintos. 

import Cine from "./cine";

function main(){

// ● Crear una instancia y asignarle valores. 
    const cine1 = new Cine()
    cine1.nombrePelicula = "Rambo";
    cine1.horario = "8:30 pm";

// ● Mostrar por pantalla los valores. 
    console.log(`El nombre es: ${cine1.nombrePelicula}, Hora: ${cine1.horario}`);

// ● Crear una segunda instancia y asignarle valores. 
    const cine2 = new Cine()
    cine2.nombrePelicula = "Superman";
    cine2.horario = "8:45 pm";

// ● Mostrar por pantalla los valores. 
        console.log(`El nombre es: ${cine2.nombrePelicula}, Hora: ${cine2.horario}`);

// ● Cambiar los valores de la primera instancia. 
    cine1.nombrePelicula = "F1";
    cine1.horario = "9:45 pm";

// ● Mostrar en pantalla los valores de ambas instancias; concluir que la instrucción new crea 
// objetos distintos.
    console.log(`El nombre es: ${cine1.nombrePelicula}, Hora: ${cine1.horario}`);
    console.log(`El nombre es: ${cine2.nombrePelicula}, Hora: ${cine2.horario}`);
}
main();