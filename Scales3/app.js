var Scales = /** @class */ (function () {
    function Scales(item) {
        var _this = this;
        this.item = item;
        this.add = function (_item) {
            _this.item.addItem(_item);
        };
        this.getSumScale = function () {
            var _sumScale = 0;
            for (var i = 0; i < _this.item.getCount(); i++) {
                _sumScale += _this.item.getItem(i).getScale();
            }
            return _sumScale;
        };
        this.getNameList = function () {
            var _nameList = [];
            for (var i = 0; i < _this.item.getCount(); i++) {
                _nameList.push(_this.item.getItem(i).getName());
            }
            return _nameList;
        };
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
        this.getItem = function (index) { return _this.products[index]; };
        this.getCount = function () { return _this.products.length; };
    }
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        var _this = this;
        this.number = 0;
        this.addItem = function (item) {
            var json = JSON.stringify(item);
            localStorage.setItem(_this.number.toString(), json);
            _this.number++;
        };
        this.getItem = function (index) {
            var res = JSON.parse(localStorage[index]);
            return res;
        };
        this.getCount = function () { return _this.number; };
    }
    return ScalesStorageEngineLocalStorage;
}());
var Product = /** @class */ (function () {
    function Product(name, weight) {
        var _this = this;
        this.name = name;
        this.weight = weight;
        this.getScale = function () { return _this.weight; };
        this.getName = function () { return _this.name; };
    }
    return Product;
}());
var apple1 = new Product('яблоко', 52);
var apple2 = new Product('помидор1', 32);
var tomato1 = new Product('помидор2', 15);
var arr = new ScalesStorageEngineLocalStorage();
var scales1 = new Scales(arr);
scales1.add(apple1);
scales1.add(apple2);
scales1.add(tomato1);
console.log(scales1.getSumScale());
console.log(scales1.getNameList());
//# sourceMappingURL=app.js.map