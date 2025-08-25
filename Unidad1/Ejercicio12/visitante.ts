//  Continuando con el ejemplo anterior, realizar las siguientes modificaciones: 
// ● Modificar la clase Guardia para que el método público controlarDocumento() devuelva 
// el mensaje “Adelante <nombre completo del visitante> con dni <dni>” reemplazando 
// respectivamente con el nombre completo del visitante y su dni. 
// ● Crear una instancia de cada una de las clases y asignarle valores. 
// ● Mostrar por pantalla los valores. 
// ● Analizar si es posible pasar un único parámetro al método controlarDocumento() y 
// estudiar las ventas y desventajas que tendría asociado. 


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