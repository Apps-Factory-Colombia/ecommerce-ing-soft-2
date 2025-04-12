import { DiscountStrategy } from "../DiscountStrategy";

//Estrategia de descuento por membresía
export class MembershipDiscount extends DiscountStrategy {
  applyDiscount(price) {
    return price * 0.9;
  }
}
