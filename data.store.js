const fs = require("fs");

class DataStore {
    constructor(fileName) {
        this.fileName = fileName;
    }

    async save(object) {
        try {
            const data = await this.getAll();
            let id = 1;
            if (data && data.length >0) {
                id = data[data.length - 1].id + 1;
            }
            //const id = data.length + 1;
            const newObject = { id, ...object };
            data.push(newObject);
            await fs.promises.writeFile(this.fileName, JSON.stringify(data, null, 2));
            return id;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const data = await fs.promises.readFile(this.fileName, "utf-8");
            return JSON.parse(data);
        } catch (error) {
            //Create file if not exists
            await fs.promises.writeFile(this.fileName, JSON.stringify([], null, 2));
            return JSON.parse("[]");
        }
    }

    async getById(id) {
        try {
            const data = await this.getAll();
            return data.find((object) => object.id === id);
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            const data = await this.getAll();
            const newData = data.filter((object) => object.id !== id);
            await fs.promises.writeFile(this.fileName, JSON.stringify(newData, null, 2));
        } catch (error) {
            console.log(error);
        }
    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.fileName, JSON.stringify([], null, 2));
        } catch (error) {
            console.log(error);
        }
    }

    async updateById(id, object) {
        try {
            const data = await this.getAll();
            let updated = false;
            const newData = data.map((item) => {
                if (item.id === id) {
                    updated = true;
                    return { id, ...item, ...object };
                }
                return item;
            });
            await fs.promises.writeFile(this.fileName, JSON.stringify(newData, null, 2));
            return updated;
        } catch (error) {
            console.log(error);
        }
    }    

}

module.exports = DataStore;

