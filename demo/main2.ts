import {Post} from "./Post";

// let post1: Post = { };
interface IGeo {
   lat: string;
   lng: string;
}
interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}
interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}
interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: IAddress;
    company: ICompany;
}
let user: IUser = {
    id:123,
    name:'asd',
    username:'qweww',
    email:'asd@asd.com',
    phone:'+80987446123',
    website:'wert.com.ua',
    company:{name:'sdfg',catchPhrase:'erdfty',bs:'sdf'},
    address:{city:'',street:'',suite:'',zipcode:'',geo: {lat:'',lng:''}}
}