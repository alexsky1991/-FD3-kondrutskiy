var Scales = /** @class */ (function () {
    function Scales(item) {
        this.item = item;
        this.products = [];
    }
    return Scales;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        var _this = this;
        this.products = [];
        this.addItem = function (item) {
            _this.products.push(item);
        };
        this.getItem = function (index) {
            return _this.products[index];
        };
        this.getCount = function () {
            return _this.products.length;
        };
    }
    return ScalesStorageEngineArray;
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
var apple1 = new Product('яблоко', 52);
var apple2 = new Product('помидор1', 32);
var tomato1 = new Product('помидор2', 15);
var scales1 = new ScalesStorageEngineArray();
scales1.addItem(apple1);
scales1.addItem(apple2);
scales1.addItem(tomato1);
var scales2 = new Scales(scales1);
// console.log(scales1.getSumScale());
// console.log(scales1.getNameList());
console.log(scales1.getCount());
//# sourceMappingURL=app.js.map