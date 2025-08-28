//      La Marina del reino de Caballito quiere desarrollar un sistema que le permita gestionar su flota 
// de navíos; por el momento únicamente se requiere presentar ante las autoridades un posible 
// diseño en el que se expongan las relaciones entre las entidades que modelarán los datos. 

//      ● De los acorazados se requiere saber la flotabilidad, la solidez, la estabilidad, blindaje y 
// potencia de fuego, además de la velocidad crucero y el nombre con el que fue 
// bautizado. 

//      ● Los destructores se caracterizan por la potencia de fuego y altos índices de 
// maniobrabilidad y estabilidad cuando alcanza su velocidad máxima, aunque también se 
// necesita registrar la flotabilidad, solidez, la velocidad crucero y nombre. 

//      ● Hay únicamente un barco hospital, llamada “Sibelancia”, con excelente flotabilidad y una 
// estabilidad extrema que la hace ideal para su trabajo; posee una capacidad de carga que 
// le permite brindar servicios a setenta y cinco pacientes. 

//      ● “La gaucha” y “El gaucho” son dos lanchas destinadas a brindar servicio médico que se 
// emplean para salvatajes rápidos; poseen motor fuera de borda, una elevada flotabilidad 
// que le permite ir muy rápido, aunque debido a que la estabilidad no es muy buena, la 
// maniobrabilidad se ve afectada; ambas poseen una grúa pequeña que les permite subir 
// y/o arriar objetos de hasta trescientos kilos. 

// Analizar, diseñar, diagramar las relaciones e implementar el código. 
// Crear instancias de los distintos barcos, asignar valores y mostrar por pantalla.

import Acorazados from "./entidades/acorazados";
import BarcoHospital from "./entidades/barcoHospital";
import Destructores from "./entidades/destructores";
import Gaucho from "./entidades/gaucha";
import Gaucha from "./entidades/gaucho";

function main(){

    const acorazado1 = new Acorazados("Benshy", 150, 95, "Alta", 95, "grado 100", "Alta")

    const barcoHospital1 = new BarcoHospital(25, 100, "Alta", 60, 95)
    
    console.log(acorazado1.mostrarDatos(), acorazado1.mostrarInfo());
    //console.log(acorazado1.mostrarInfo());
    
    console.log(barcoHospital1.mostrarDatos(), barcoHospital1.mostrarInfo());
    //console.log(barcoHospital1.mostrarInfo());


}main();