var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        var _this = this;
        this.products = [];
        this.add = function (item) {
            _this.products.push(item);
        };
        this.getSumScale = function () {
            var result = _this.products.reduce(function (a, b) { return a + b.weight; }, 0);
            return result;
        };
        this.getNameList = function () {
            var result = _this.products.map(function (el) { return el.name; });
            return result;
        };
    }
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(name, weight) {
        var _this = this;
        this.getScale = function () {
            console.log(_this.weight);
        };
        this.getName = function () {
            console.log(_this.name);
        };
        this.name = name;
        this.weight = weight;
    }
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tomato;
}(Product));
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