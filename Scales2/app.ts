
interface IScalable {

    weight:number;

    name:string;

    getScale():void;

    getName():void;
}


class Scales {

    products:IScalable[] = [];

    add = (item:IScalable):void => {
        this.products.push(item);
    }

    getSumScale = ():number => {
        let result:number = this.products.reduce((a,b) => a + b.weight, 0);
        return result;
    }

    getNameList = ():string[] => {
        let result:string[] = this.products.map(el => el.name)
        return result;
    }
}


class Apple implements IScalable {

    constructor(public name:string, public weight:number){}

    getScale = ():void => console.log(this.weight)
    
    getName = ():void => console.log(this.name)
}

class Tomato implements IScalable  {

    constructor(public name:string, public weight:number){}

    getScale = ():void => console.log(this.weight)
    
    getName = ():void => console.log(this.name)
}


let apple1:Apple = new Apple('яблоко', 52);
let apple2:Apple = new Apple('помидор1', 32);
let tomato1:Tomato = new Tomato('помидор2', 15);

let scales1:Scales = new Scales();

scales1.add(apple1);
scales1.add(apple2);
scales1.add(tomato1);

console.log(scales1.getSumScale());
console.log(scales1.getNameList());





