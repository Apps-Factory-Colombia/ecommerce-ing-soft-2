// PATRÓN SINGLETON aplicado aquí para mantener una única instancia del catálogo de productos
export class ProductCatalog {
    static instance;
    products = [];

    constructor() {
        if (ProductCatalog.instance) {
            return ProductCatalog.instance;
        }
        ProductCatalog.instance = this;
    }

    static getInstance() {
        if (!ProductCatalog.instance) {
            ProductCatalog.instance = new ProductCatalog();
        }
        return ProductCatalog.instance;
    }

    setProducts(products) {
        this.products = products;
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        return this.products.find(p => p.id === id);
    }
}