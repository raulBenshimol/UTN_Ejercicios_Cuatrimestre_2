// Continuando con el ejemplo anterior, realizar las siguientes modificaciones: 
// ● Agregar en Visitante el atributo privado dni (numérico) con sus setters y getters 
// correspondientes. 
// ● Agregar en Guardia el método público controlarDocumento() que reciba como 
// parámetro el dni de la persona y devuelva el mensaje “Adelante persona con dni <dni>” 
// donde <dni> es el valor recibido por parámetro. 
// ● Crear una instancia de cada una de las clases y asignarle valores. 
// ● Mostrar por pantalla los valores.

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
        return `Adelante persona con dni ${visitante.dni}`;
    }
} 