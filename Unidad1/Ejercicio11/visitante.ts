// Continuando con el ejemplo anterior, realizar las siguientes modificaciones: 
// ● Agregar en Visitante el atributo privado dni (numérico) con sus setters y getters 
// correspondientes. 
// ● Agregar en Guardia el método público controlarDocumento() que reciba como 
// parámetro el dni de la persona y devuelva el mensaje “Adelante persona con dni <dni>” 
// donde <dni> es el valor recibido por parámetro. 
// ● Crear una instancia de cada una de las clases y asignarle valores. 
// ● Mostrar por pantalla los valores.


import Persona from "./persona";

export default class Visitante extends Persona{

    private _dni: number;

    public constructor(nombre: string, apellido: string, dni: number = 0){
        super(nombre, apellido);
        this._dni = dni;
    }
    public get dni(){
        return this._dni;
    }
    public set dni(value: number){
        this._dni = value;
    }
} 