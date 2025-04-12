import { DiscountStrategy } from "../DiscountStrategy";

// esta es la estragia de descuento para el Black Friday
export class BlackFridayDiscount extends DiscountStrategy {
  applyDiscount(price) {
    return price * 0.5;
  }
}
