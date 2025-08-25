//  Continuando con el ejemplo anterior, realizar las siguientes modificaciones: 
// ● Modificar la clase Guardia para que el método público controlarDocumento() devuelva 
// el mensaje “Adelante <nombre completo del visitante> con dni <dni>” reemplazando 
// respectivamente con el nombre completo del visitante y su dni. 
// ● Crear una instancia de cada una de las clases y asignarle valores. 
// ● Mostrar por pantalla los valores. 
// ● Analizar si es posible pasar un único parámetro al método controlarDocumento() y 
// estudiar las ventas y desventajas que tendría asociado. 

import Persona from "./persona";
import Visitante from "./visitante";

export default class Guardia extends Persona{
    public constructor(nombre: string, apellido: string){
        super(nombre, apellido);
    }

    public presentarse(): string {
        return `Hola, mi nombre es ${this.nombre} ${this.apellido} y soy el guardia.`
    }

    public controlarDocumento(visitante: Visitante): string{
        return `Adelante ${visitante.nombre} ${visitante.apellido} con dni ${visitante.dni}`;
    }
} 