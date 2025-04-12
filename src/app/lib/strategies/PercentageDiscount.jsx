import { DiscountStrategy } from "../DiscountStrategy";
//Estrategia de descuento de porcentaje
export class PercentageDiscount extends DiscountStrategy {
  constructor(percent) {
    super();
    this.percent = percent;
  }

  applyDiscount(price) {
    return price - (price * this.percent) / 100;
  }
}
