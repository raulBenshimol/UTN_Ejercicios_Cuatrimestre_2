// Una empresa de seguridad que se dedica a la vigilancia mediante el empleo de drones, ha 
// desarrollado un sistema de montaje que permitirá que los drones puedan cargar, además de la 
// cámara de vigilancia, una herramienta accionable a distancia.

// Actualmente el sistema de anclaje admite: 
//      ● Sensor infrarrojo: pesa 250 gramos 
//      ● Taser: pesa 300 gramos 
//      ● Brazo robótico: pesa 500 gramos 

// El dron puede soportar hasta 200 gramos sin sufrir penalizaciones de velocidad (5 mts/s) ni 
// altura (100 mts); luego, por cada 50 gramos extras, el dron reduce su velocidad en 2% y 
// la altura en 5%. 

// Analizar, diseñar, diagramar las relaciones e implementar el código. 

// Crear instancias de cada una de las clases y asignarle al dron las distintas herramientas, 
//      procurando mostrar por pantalla los siguientes datos entre las distintas asignaciones: 
//      velocidad, altura y tipo de herramienta que lleva.

export default abstract class Herramienta{
    private _peso: number;

    public get peso(){
        return this._peso;
    }
    public set peso(value: number){
        this._peso = value;
    }

    public constructor(peso: number){
        this._peso = peso;
    }

    abstract tipoHerramienta(): string;
}