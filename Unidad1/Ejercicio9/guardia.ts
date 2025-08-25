// Crear una clase Persona que tenga los atributos privados nombre y apellido, con sus setters y 
// getters. 
// ● Crear una clase llamada Visitante que extienda de Persona. 
// ● Crear una clase Guardia que extienda de Persona. 
// ● Crear una instancia de cada una de las clases y asignarle valores. 
// ● Mostrar por pantalla los valores; estudiar las ventajas del uso de la herencia.

import Persona from "./persona";

export default class Guardia extends Persona{
    public constructor(nombre: string, apellido: string){
        super(nombre, apellido);
    }
} 