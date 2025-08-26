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


import Robot from "./robot";
import Rueda from "./rueda";
import Oruga from "./oruga";

function main(){
    // Crear robot
    const robot1 = new Robot("KT-2020-P", 10);
    const robot2 = new Robot("KT-2020-P", 10);
    
    // Crear sistemas de tracción
    const ruedas1 = new Rueda();
    const orugas1 = new Oruga();
    
    // Asignar ruedas
    robot1.asignarTraccion(ruedas1);
    robot1.mostrarDatos();
    
    // Asignar orugas
    robot2.asignarTraccion(orugas1);
    robot2.mostrarDatos();
}main();