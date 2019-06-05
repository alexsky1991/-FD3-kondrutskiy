
interface IStorageEngine{

    addItem(item:any):void;

    getItem(index:number):void;

    getCount():number;
}


class Scales<StorageEngine extends IStorageEngine> {

    constructor(public item:StorageEngine){}


    getSumScale = ():number => {
        let result:number = this.item.products.reduce((a,b) => a + b.weight, 0);
        return result;
    }

    // getNameList = ():string[] => {
    //     let result:string[] = this.products.map(el => el.name)
    //     return result;
    // }
}


class ScalesStorageEngineArray implements IStorageEngine{

    products:Product[] = [];

    addItem = (item:Product):void => {
        this.products.push(item);
    }

    getItem = (index:number):Product => {
        return this.products[index];
    }

    getCount = ():number => {
        return this.products.length
    }
    
}

class Product{

    name:string;
    weight:number;

    constructor(name:string, weight:number) {
        this.name = name;
        this.weight = weight;
    }

    getScale = ():void => {
        console.log(this.weight)
    }

    getName = ():void => {
        console.log(this.name)
    }

}


let apple1:Product = new Product('яблоко', 52);
let apple2:Product = new Product('помидор1', 32);
let tomato1:Product = new Product('помидор2', 15);

let scales1:ScalesStorageEngineArray = new ScalesStorageEngineArray();

scales1.addItem(apple1);
scales1.addItem(apple2);
scales1.addItem(tomato1);

let scales2 = new Scales<ScalesStorageEngineArray>(scales1)


console.log(scales1.getCount());
console.log(scales2.getSumScale());
// console.log(scales1.getNameList());




