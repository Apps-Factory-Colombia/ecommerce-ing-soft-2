//Este es el contexto de descuento que se encarga de aplicar la estrategia de descuento que se vaya a usar
export class DiscountContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(price) {
    return this.strategy.applyDiscount(price);
  }
}
