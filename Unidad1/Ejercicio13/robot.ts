// El laboratorio Kokumo Technologies está desarrollando el prototipo de un robot explorador cuyo 
// sistema de tracción puede ser personalizado para que se adapte mejor al terreno.

// El robot, llamado KT-2020, tiene las siguientes características: 
//      ● Número de serie: KT-2020-P 
//      ● Potencia de tracción base (PTB): 10 hp 
//      ● Tracción: cualquiera de las dos opciones desarrolladas. 

// Los sistemas de tracción disponibles son: 
//      ● Rueda de caucho: ideal para entornos urbanos, su uso le resta 1 hp al PTB y permite el 
//        rodado de hasta 100 km; cuando se gasta, debe reemplazarse. 
//      ● Oruga: para todo tipo de terreno, le permite avanzar hasta 400 km antes de requerir 
//        reemplazo y resta 3 hp al PTB. Incorpora sensores Meke-M0 que le permiten conocer la 
//        temperatura. 

// Analizar, diseñar, diagramar las relaciones e implementar el código. 

// Crear instancias de cada una de las clases y asignarle al robot los distintos sistemas de tracción, 
// procurando mostrar por pantalla los siguientes datos entre las distintas asignaciones: 
// Número de serie, potencia de tracción final, tipo de tracción, cuanto puede avanzar y 
// datos sobre cualquier característica adicional que posea.


import SistemaTraccion from "./sistemaTraccion";

export default class Robot{
    private _numeroSerie: string;
    private _potenciaTraccionBase: number;
    private _sistemaTraccion: SistemaTraccion | undefined;

    public constructor(numeroSerie: string, potenciaTraccionBase: number){
        this._numeroSerie = numeroSerie;
        this._potenciaTraccionBase = potenciaTraccionBase;
    }

    public asignarTraccion(traccion: SistemaTraccion){
        this._sistemaTraccion = traccion;
    }
    public mostrarDatos(){
        if(!this._sistemaTraccion){
            console.log("El robot no tiene sistema de tracción asignado.");
            return;
        }
        const potenciaFinal = this._potenciaTraccionBase - this._sistemaTraccion.reduccionHP;

        console.log("Datos del Robot");
        console.log(`Número de serie: ${this._numeroSerie}`);
        console.log(`Potencia final: ${potenciaFinal} hp`);
        console.log(`Tipo de tracción: ${this._sistemaTraccion.tipo}`);
        console.log(`Puede avanzar hasta: ${this._sistemaTraccion.distanciaMax} km`);
        console.log(`Extras: ${this._sistemaTraccion.detalles()}`);
        console.log("\n");
    }
}