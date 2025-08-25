// Crear una clase Persona que tenga los atributos privados nombre y apellido, con sus setters y 
// getters. 
// ● Crear una clase llamada Visitante que extienda de Persona. 
// ● Crear una clase Guardia que extienda de Persona. 
// ● Crear una instancia de cada una de las clases y asignarle valores. 
// ● Mostrar por pantalla los valores; estudiar las ventajas del uso de la herencia.

import Persona from "./persona";
import Guardia from "./guardia";
import Visitante from "./visitante";

function main(){

    const persona1 = new Persona("Raul", "Benshimol")
    const guardia1 = new Guardia("Daniel", "Flores")
    const visitante1 = new Visitante("Carlos", "Diaz")

    console.log(`El nombre de la persona es: ${persona1.nombre} ${persona1.apellido}`)
    console.log(`El nombre del guardia es: ${guardia1.nombre} ${guardia1.apellido}`)
    console.log(`El nombre del visitante es: ${visitante1.nombre} ${visitante1.apellido}`)

}main();