import type { Producto } from "./producto"
import type { Venta } from "./venta"

export interface Ventadetalle {
  id: number;
  cantidad: number;
  subtotal: number;
  venta: Venta;
  producto: Producto;
}
