
// Crear una clase Cine que tenga los atributos privados película y horario: 
// ● Crear métodos públicos para la asignación y recuperación de valores. 
// ● Crear un método público obtenerCartelera() que devuelva el nombre 
//   de la película y el horario. 
// ● Crear una instancia y asignarle valores. 
// ● Mostrar por pantalla los valores. 


import Cine from "./cine";

function main(): void{
    const cine1 = new Cine("Roky", "20:30 pm");
    cine1.obtenerCartelera();
}
main();