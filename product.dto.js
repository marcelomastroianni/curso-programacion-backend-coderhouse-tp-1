class ProductDto {
  constructor(id, name, timestamp, description, code, price, stock, photo_url) {
    this.id = id;
    this.name = name;
    this.timestamp = timestamp;
    this.description = description;
    this.code = code;
    this.price = price;
    this.stock = stock;
    this.photo_url = photo_url;
  }
}

class CreateProductDto {
  constructor( name, timestamp, description, code, price, stock, photo_url) {
    this.name = name;
    this.timestamp = timestamp;
    this.description = description;
    this.code = code;
    this.price = price;
    this.stock = stock;
    this.photo_url = photo_url;
  }
}

class UpdateProductDto {
  constructor( name, description, code, price, stock, photo_url) {
    this.name = name;
    this.description = description;
    this.code = code;
    this.price = price;
    this.stock = stock;
    this.photo_url = photo_url;
  }
}
  

module.exports = {CreateProductDto, UpdateProductDto, ProductDto}

