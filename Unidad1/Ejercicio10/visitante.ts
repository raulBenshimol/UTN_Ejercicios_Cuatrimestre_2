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

export default class Visitante extends Persona{
    public constructor(nombre: string, apellido: string){
        super(nombre, apellido);
    }
} 