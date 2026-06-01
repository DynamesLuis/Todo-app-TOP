export default class Todo {
    constructor(name, description, date, priority) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.date = date;
        this.priority = priority;
    }

    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getDate() {
        return this.date;
    }
    getPriority() {
        return this.priority;
    }

    setName(newName) {
        this._name = newName;
    }
    setDescription(newDescription) {
        this._description = newDescription;
    }
    setDate(newDate) {
        this._date = newDate;
    }
    setPriority(newPriority) {
        this._priority = newPriority;
    }
}

