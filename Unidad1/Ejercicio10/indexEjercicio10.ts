// Continuando con el ejemplo anterior, realizar las siguientes modificaciones: 
// ● Agregar en Persona el método presentarse() que devuelva nombre y apellido de la 
// persona. 
// ● Crear una instancia de cada una de las clases y asignarle valores. 
// ● Mostrar por pantalla los valores. 
// ● Sobreescribir el método presentarse() en la clase Guardia de modo tal que devuelva el 
// siguiente mensaje “Hola, mi nombre es <nombre y apellido> y soy el guardia.” Donde 
// <nombre y apellido> debe ser reemplazado por el nombre y apellido del guardia. 
// 4 
// ● Mostrar por pantalla el resultado de invocar el método presentarse() y advertir que la 
// implementación en la clase Guardia tiene precedencia sobre la de su padre. 

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

    console.log(persona1.presentarse());
    console.log(guardia1.presentarse());

}main();