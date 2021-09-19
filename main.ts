class User {
   private _name: string;
   private _age: number;
    constructor(name: string, age: number) {
        this._name =name;
        this._age = age;
    }
    greeting(){
        return `hello my name is ${this._name}`
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}
function foo(a: User){

}
let user =new User('kokos', 33);
// user.age=33;
// user.name='kokos';
foo(user);
// foo({name:'qwerty',age:123});

interface IUser {
    name: string;
    age: number;
    greeting?(a:string):string;
}
function bar(b:IUser){

}
bar({name:'asdf', age:123});
bar({name:'asdf', age:123, greeting: (a:string):string=>{
return 'hello';
    }})
class  X implements IUser {
    ownXProp1: string;
    ownXProp2: string[];
    age: number;
    name: string;
}
let x = new X();
let iUsers: IUser[] = [
    x,
    {name:'asdf', age:123, greeting: (a:string):string=>{
            return 'hello';
        }}]
bar(new X());
function foobar(user:User){
    user.greeting();
}
let user1 = new User('asdfg',123);
foobar(user1);