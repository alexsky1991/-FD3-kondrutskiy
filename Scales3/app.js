var Scales = /** @class */ (function () {
    function Scales(obj) {
        var _this = this;
        this.getSumScale = function () {
            console.log(_this.item);
            return 1;
        };
        this.item = obj;
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
//# sourceMappingURL=app.js.map