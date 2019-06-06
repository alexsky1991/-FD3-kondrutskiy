
interface IScalable {

    getScale():number;

    getName():string;
}


class Scales {

    products:IScalable[] = [];

    add = (item:IScalable):void => {
        this.products.push(item);
    }

    getSumScale = ():number => {
        let result:number = this.products.reduce((a,b) => a + b.getScale(), 0);
        return result;
    }

    getNameList = ():string[] => {
        let result:string[] = this.products.map(el => el.getName())
        return result;
    }
}


class Apple implements IScalable {

    constructor(public name:string, public weight:number){}

    getScale = ():number => this.weight
    
    getName = ():string => this.name
}

class Tomato implements IScalable  {

    constructor(public name:string, public weight:number){}

    getScale = ():number => this.weight
    
    getName = ():string => this.name
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





