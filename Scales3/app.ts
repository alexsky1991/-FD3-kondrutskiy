
interface IStorageEngine{

    addItem(item:any):void;

    getItem(index:number):Product;

    getCount():number;
}


class Scales<StorageEngine extends IStorageEngine> {

    constructor(public item:StorageEngine){}

    add = (_item:Product):void => {
        this.item.addItem(_item)
    }

    getSumScale = ():number => {
       let _sumScale:number = 0;

        for (let i = 0; i<this.item.getCount(); i++) {
            _sumScale += this.item.getItem(i).getScale();
        }

       return _sumScale
    }

    getNameList = ():string[] => {
        let _nameList:string[] = [];

        for (var i = 0; i < this.item.getCount(); i++) {
           _nameList.push(this.item.getItem(i).getName())
        }

        return _nameList;
    }
}


class ScalesStorageEngineArray implements IStorageEngine{

    products:Product[] = [];

    addItem = (item:Product):void => {
        this.products.push(item);
    }

    getItem = (index:number):Product => this.products[index];
    
    getCount = ():number => this.products.length;
     
}

class ScalesStorageEngineLocalStorage implements IStorageEngine{

    number:number = 0;

    addItem = (item:Product):void => {
        var json = JSON.stringify(item)

        localStorage.setItem(this.number.toString(), json)
        this.number++;
    }
       
    getItem = (index:number):Product => {
       let res:Product = JSON.parse(localStorage[index])
       return res
    }

    getCount = ():number => this.number; 

}

class Product{

    constructor(public name:string, public weight:number) {}

    getScale = ():number => this.weight;
    
    getName = ():string => this.name;
   
}


let apple1:Product = new Product('яблоко', 52);
let apple2:Product = new Product('помидор1', 32);
let tomato1:Product = new Product('помидор2', 15);

let arr = new ScalesStorageEngineLocalStorage();

let scales1 = new Scales<ScalesStorageEngineLocalStorage>(arr);

scales1.add(apple1);
scales1.add(apple2);
scales1.add(tomato1);


console.log(scales1.getSumScale());
console.log(scales1.getNameList());




