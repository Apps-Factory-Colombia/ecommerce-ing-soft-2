// Esta será la interfaz de Strategy que deba implementarse en las estrategias de descuento
export class DiscountStrategy {
  applyDiscount(price) {
    throw new Error("Método no implementado");
  }
}
