//  Continuando con el ejemplo anterior, realizar las siguientes modificaciones: 
// ● Modificar la clase Guardia para que el método público controlarDocumento() devuelva 
// el mensaje “Adelante <nombre completo del visitante> con dni <dni>” reemplazando 
// respectivamente con el nombre completo del visitante y su dni. 
// ● Crear una instancia de cada una de las clases y asignarle valores. 
// ● Mostrar por pantalla los valores. 
// ● Analizar si es posible pasar un único parámetro al método controlarDocumento() y 
// estudiar las ventas y desventajas que tendría asociado. 

import Persona from "./persona";
import Guardia from "./guardia";
import Visitante from "./visitante";

function main(){

    const persona1 = new Persona("Raul", "Benshimol")
    const guardia1 = new Guardia("Daniel", "Flores")
    const visitante1 = new Visitante("Carlos", "Diaz", 14984532)

    console.log(`El nombre de la persona es: ${persona1.nombre} ${persona1.apellido}`)
    console.log(`El nombre del guardia es: ${guardia1.nombre} ${guardia1.apellido}`)
    console.log(`El nombre del visitante es: ${visitante1.nombre} ${visitante1.apellido}`)

    console.log(persona1.presentarse());
    console.log(guardia1.presentarse());
    console.log(guardia1.controlarDocumento(visitante1));

}main();