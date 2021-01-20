class DSTask {
    arr = [];
    add(task) {
        this.arr.push(task);
    }
    deleteInArr(name) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i].name == name) {
                this.arr.splice(i, 1);
                return;
            }
        }
    }
    constructor() { };
}