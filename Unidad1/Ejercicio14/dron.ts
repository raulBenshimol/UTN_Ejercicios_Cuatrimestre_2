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

import Herramienta from "./herramienta";

export default class Dron{
    private _altura: number;
    private _velocidad: number;
    private _herramienta: Herramienta | undefined;

    public constructor(altura: number = 100, velocidad: number = 5){
        this._altura = altura;
        this._velocidad = velocidad;
    }

    public asignarHerramienta(herramienta: Herramienta){
        this._herramienta = herramienta;
    }

    public mostrarDatos(){
        if(!this._herramienta){
            console.log("Datos del Dron");
            console.log("El dron no tiene herramienta asignada.");
            console.log("Velocidad max (5 mts/s)");
            console.log("Altura max (100 mts)");
            console.log("\n");
            return;
        }
        let soportaPeso = this._herramienta.peso;

        if(soportaPeso == 250){
            this._velocidad = 5 * 0.98;
            this._altura = 100 * 0.95;
        }
        else if(soportaPeso == 300){
            this._velocidad = 5 * 0.98 * 0.98;
            this._altura = 100 * 0.95 * 0.95;
        }else if(soportaPeso == 500){
            this._velocidad = 5 * 0.98 * 0.98 * 0.98 * 0.98 * 0.98 * 0.98;
            this._altura = (100 * 0.735091890625);
        }



        console.log("Datos del Dron");
        console.log(`Velocidad max: ${this._velocidad} mts/s`);
        console.log(`Altura max: ${this._altura} mts`);
        console.log(`Extras: ${this._herramienta.tipoHerramienta()}`);
        console.log("\n");
    }
}