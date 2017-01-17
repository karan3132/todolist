var modul = angular.module("myapp", []);
modul.controller("todoctrl", main);

function main() {
    this.editable = false;
    this.task = [
        "abc",
        "pqr",
        "xyz"
    ];
    this.addthread = function () {
        this.task.push(this.todoin);
        this.todoin = "";
    }
    this.editthread = function () {
        this.editable = !this.editable;
    }
    this.remove = function (index) {
        this.task.splice(index,1);
    }
}
