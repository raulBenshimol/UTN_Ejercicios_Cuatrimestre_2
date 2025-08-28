export default abstract class Elemento {
  private _descripcion: string;
  private _dimensiones: string;
  private _numeroIdentidad: string;
  
  public constructor(descripcion: string, dimensiones: string, numeroIdentidad: string){
    this._descripcion = descripcion;
    this._dimensiones = dimensiones;
    this._numeroIdentidad = numeroIdentidad;
  }
  public get descripcion(){
    return this._descripcion;
  }
  public get dimensiones(){
    return this._dimensiones;
  }
  public get numeroIdentidad(){
    return this._numeroIdentidad;
  }
}
