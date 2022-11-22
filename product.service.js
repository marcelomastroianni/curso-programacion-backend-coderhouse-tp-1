const DataStore = require('./data.store');

class ProductService {

    constructor() {
        this.dataStore = new DataStore("productos.txt");
    }

    getAll = async () => {
        const data = await this.dataStore.getAll();
        return data;
    }

    getOne = async (id) => {
        const data = await this.dataStore.getById(Number(id));
        return data;
    }

    create = async (product) => {
        const id = await this.dataStore.save(product);
        return id;
    }

    update = async (id, product) => {
        const response = await this.dataStore.updateById(Number(id), product);
        return response;
    }

    delete = async (id) => {
        const data = await this.dataStore.getById(Number(id));
        if (data) {
            await this.dataStore.deleteById(Number(id));
            return true;
        } else {
            return false;
        }
    }
}

module.exports = ProductService
