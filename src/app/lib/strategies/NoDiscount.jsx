//La estrategia NoDiscount no aplica ningún descuento al precio del producto.
import { DiscountStrategy } from "../DiscountStrategy";

export class NoDiscount extends DiscountStrategy {
  applyDiscount(price) {
    return price;
  }
}
