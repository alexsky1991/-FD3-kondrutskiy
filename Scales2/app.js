var Scales = /** @class */ (function () {
    function Scales() {
        var _this = this;
        this.products = [];
        this.add = function (item) {
            _this.products.push(item);
        };
        this.getSumScale = function () {
            var result = _this.products.reduce(function (a, b) { return a + b.getScale(); }, 0);
            return result;
        };
        this.getNameList = function () {
            var result = _this.products.map(function (el) { return el.getName(); });
            return result;
        };
    }
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(name, weight) {
        var _this = this;
        this.name = name;
        this.weight = weight;
        this.getScale = function () { return _this.weight; };
        this.getName = function () { return _this.name; };
    }
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(name, weight) {
        var _this = this;
        this.name = name;
        this.weight = weight;
        this.getScale = function () { return _this.weight; };
        this.getName = function () { return _this.name; };
    }
    return Tomato;
}());
var apple1 = new Apple('яблоко', 52);
var apple2 = new Apple('помидор1', 32);
var tomato1 = new Tomato('помидор2', 15);
var scales1 = new Scales();
scales1.add(apple1);
scales1.add(apple2);
scales1.add(tomato1);
console.log(scales1.getSumScale());
console.log(scales1.getNameList());
//# sourceMappingURL=app.js.map