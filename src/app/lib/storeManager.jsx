//Tenemos un god Object que se encarga de manejar el catalogo de productos y las estrategias de descuento hace de too

import { ProductCatalog } from "./ProductCatalog";
import { BlackFridayDiscount } from "./strategies/BlackFridayDiscount";
import { DiscountContext } from "./DiscountContext";
import { NoDiscount } from "./strategies/NoDiscount";
import { MembershipDiscount } from "./strategies/MembershipDiscount";
import { FixedAmountDiscount } from "./strategies/FixedAmountDiscount";
import { PercentageDiscount } from "./strategies/PercentageDiscount";

export class StoreManager {
  static instance;
  catalog = ProductCatalog.getInstance();
  discountContext = new DiscountContext(new BlackFridayDiscount());

  constructor() {
    if (StoreManager.instance) {
      return StoreManager.instance;
    }
    StoreManager.instance = this;
  }

  static getInstance() {
    if (!StoreManager.instance) {
      StoreManager.instance = new StoreManager();
    }
    return StoreManager.instance;
  }

  async fetchAndCacheProducts() {
    const cachedProducts = this.catalog.getProducts();
    if (cachedProducts.length > 0) return cachedProducts;

    const res = await fetch(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=12"
    );
    const data = await res.json();
    this.catalog.setProducts(data);
    return data;
  }

  getDiscountedPrice(price) {
    return this.discountContext.calculate(price);
  }

  setDiscountStrategy(strategy) {
    switch (strategy) {
      case "none":
        this.discountContext.setStrategy(new NoDiscount());
        break;
      case "membership":
        this.discountContext.setStrategy(new MembershipDiscount());
        break;
      case "fixed":
        this.discountContext.setStrategy(new FixedAmountDiscount());
        break;
      case "percentage":
        this.discountContext.setStrategy(new PercentageDiscount());
        break;
      case "blackfriday":
      default:
        this.discountContext.setStrategy(new BlackFridayDiscount());
    }
  }
}
