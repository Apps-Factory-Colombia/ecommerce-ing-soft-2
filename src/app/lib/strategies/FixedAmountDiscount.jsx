import { DiscountStrategy } from "../DiscountStrategy";

//Estrategia de descuento de importe fijo

export class FixedAmountDiscount extends DiscountStrategy {
  constructor(amount) {
    super();
    this.amount = amount;
  }

  applyDiscount(price) {
    return Math.max(price - this.amount, 0);
  }
}
