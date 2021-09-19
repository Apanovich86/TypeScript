interface Client<T> {
    id: T;
    login: string;
}
let client1:Client<number> = {id:123, login:'dfghjdfgh'}
let client2:Client<string> = {id:'123dgfhgjkl;l', login: 'drtyyuio'}