import Vehiculo from "./vehiculo";
import Elemento from "../elementos/elemento";
import Comoda from "../elementos/comoda";
import Heladera from "../elementos/heladera";
import Lavarropa from "../elementos/lavarropa";

export default class Camioneta extends Vehiculo {
  constructor() {
    super(10); // máximo 10 elementos
  }

  cargar(item: Elemento): void 
  {
    if (!(item instanceof Comoda || item instanceof Heladera || item instanceof Lavarropa)) 
    {
      console.log("La Camioneta solo puede cargar cómodas, heladeras o lavarropas.");
      return;
    }
    if (this.carga.length >= this.capacidadMaxima) 
    {
      console.log("La Camioneta ya está llena.");
      return;
    }
    this.carga.push(item);
  }
  listarItems(): void 
  {
    if (this.carga.length === 0) 
    {
      console.log("Vacío");
      return;
    }
    this.carga.forEach((it, i) => console.log(`${i + 1}. ${it.descripcion}`));
  }  
}
