import { Producto } from './producto';

export class Venta extends Producto {
  public idProducto: number;
  public fechaDeVenta: Date;
  public cantidad: number;
}
