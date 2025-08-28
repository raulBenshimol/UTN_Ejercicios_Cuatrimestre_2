import Elemento from "./elemento";

export default class Caja extends Elemento {
  constructor(descripcion: string, dimensiones: string, numeroIdentidad: string) {
    super(descripcion, dimensiones, numeroIdentidad);
  }
}
