export class NoDiscount {
    applyDiscount(price) {
        return price;
    }
}

export class MembershipDiscount {
    applyDiscount(price) {
        return price * 0.9;
    }
}

export class BlackFridayDiscount {
    applyDiscount(price) {
        return price * 0.5;
    }
}

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
