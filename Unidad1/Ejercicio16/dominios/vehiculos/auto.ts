import Vehiculo from "./vehiculo";
import Elemento from "../elementos/elemento";
import Televisor from "../elementos/televisor";
import Bicicleta from "../elementos/bicicleta";
import Caja from "../elementos/caja";

export default class Auto extends Vehiculo {
  constructor() {
    super(5); // máximo 5 elementos
  }

  cargar(item: Elemento): void
  {
    if (!(item instanceof Televisor || item instanceof Bicicleta || item instanceof Caja)) 
        {
        console.log("El Auto solo puede cargar televisores, bicicletas o cajas.");
        return;
        }
    if (this.carga.length >= this.capacidadMaxima) 
        {
        console.log("El Auto ya está lleno.");
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
