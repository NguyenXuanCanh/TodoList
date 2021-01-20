class Task {
    name;
    status;
    setName(name) {
        this.name = name;
    }
    constructor() {
        this.status = "todo";
    };
}