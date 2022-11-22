

class ShoppingCartDto {

    constructor(id, timestamp, product_list) {
        this.id = id;
        this.timestamp = timestamp;
        this.product_list = product_list;
    }

    addProduct(product) {
        this.product_list.push(product);
    }

    removeProduct(product) {
        this.product_list = this.product_list.filter((p) => p.id !== product.id);
    }

}

class CreateShoppingCartDto {

    constructor(timestamp) {
        this.timestamp = timestamp;
        this.products = [];
    }

}


module.exports = {CreateShoppingCartDto, ShoppingCartDto}
