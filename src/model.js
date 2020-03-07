class Model {
    constructor() {
        this.items = new Map();
        this.count = -1;
    }

    add(name="", category="") {
        const id = this.createId();
        this.items.set(id, new Object({name: name, category: category}));
        return id;
    }

    has(id) {
        return this.items.has(id);
    }

    delete(id) {
        if (this.items.has(id)) {
            this.items.delete(id);
            return true;
        }
        return false;
    }

    createId() {
        this.count += 1;
        return this.count.toString();
    }

    toObject(id) {
        const item = this.items.get(id);
        return new Object({id: id, name: item.name, category: item.category});
    }

    get(id) {
        if (this.items.has(id)) {
            return JSON.stringify(this.toObject(id));
        }
        return JSON.stringify(new Object());
    }

     getAll() {
        const all = new Object();
        for (const [key, value] of this.items.entries()) {
            all[key] = this.toObject(key);
        }
        return JSON.stringify(all);
     }
}

module.exports = Model;