// Una empresa de logística que se encarga de realizar envíos, pone a disposición de sus clientes 
// dos tipos de vehículos: 
//      ● Una camioneta con capacidad para llevar cómodas, heladeras y lavarropas. 
//      ● Un auto con espacio suficiente como para llevar televisores, bicicletas plegables y cajas 
//        pequeñas. 

// Modelar las entidades teniendo en cuenta las siguientes consideraciones: 
// 
//      ● Los vehículos deben ofrecer el método cargar() para ir incrementando su carga, razón 
//        por la cual la función debe recibir el dato por parámetro. 
//      ● Mediante el empleo del método listarItems() el vehículo deberá facilitar el listado que 
//        compone la carga. 
//      ● Todos los elementos poseen una descripción, dimensiones y un número que los 
//        identifica pero, además, resulta de interés: 
//          i.   Cómodas: superficie y cantidad de cajones. 
//          ii.  Heladeras: voltaje al que trabaja y si posee freezer.
//          iii. Lavarropas: voltaje al que trabaja, carga y revoluciones de centrifugado. 
//          iv.  Televisores: voltaje al que trabaja, si es de led o lcd y si es inteligente. 
//          v.   Bicicletas: tamaño de rodado, si son eléctricas y cantidad de cambios. 

// Analizar, diseñar, diagramar las relaciones e implementar el código considerando que la 
// capacidad máxima de carga del auto es de 5 elementos, mientras que para la camioneta 
// es de 10. 

import Auto from "./dominios/vehiculos/auto";
import Camioneta from "./dominios/vehiculos/camioneta";
import Televisor from "./dominios/elementos/televisor";
import Bicicleta from "./dominios/elementos/bicicleta";
import Caja from "./dominios/elementos/caja";
import Comoda from "./dominios/elementos/comoda";
import Heladera from "./dominios/elementos/heladera";
import Lavarropa from "./dominios/elementos/lavarropa";
function main(){
const miAuto = new Auto();
const miCamioneta = new Camioneta();


  miAuto.cargar(new Televisor("TV 40\"", "40x20", "T001", 220, "LCD", true));
  miAuto.cargar(new Bicicleta("Bici plegable", "120x40", "B001", 26, false, 18));
  miAuto.cargar(new Caja("Caja pequeña", "30x30", "C001"));
  //miAuto.cargar(new Lavarropa("Lavarropa Samsung", "80x60", "L001", 220, 7, 1200));
  console.log("==== Carga del Auto: ====");
  miAuto.listarItems();

  miCamioneta.cargar(new Comoda("Cómoda roble", "100x50", "CO001", 2.5, 4));
  miCamioneta.cargar(new Heladera("Heladera LG", "200x60", "H001", 220, true));
  miCamioneta.cargar(new Lavarropa("Lavarropa Samsung", "80x60", "L001", 220, 7, 1200));
  console.log("==== Carga de la Camioneta: ====");
  miCamioneta.listarItems();
}main();

