import Elemento from "./elemento";

export default class Televisor extends Elemento {
  
  private _voltaje: number;
  private _led_lcd: string;
  private _esInteligente: boolean;
  
  constructor(
      descripcion: string,
      dimensiones: string,
      numeroIdentidad: string,
      voltaje: number,
      led_lcd: string,
      esInteligente: boolean) {
        super(descripcion, dimensiones, numeroIdentidad);
        this._voltaje = voltaje;
        this._led_lcd = led_lcd;
        this._esInteligente = esInteligente;
  }

  public get voltaje(){
    return this._voltaje;
  }
  public get led_lcd(){
    return this._led_lcd;
  }
  public get esInteligente(){
    return this._esInteligente;
  }

}
