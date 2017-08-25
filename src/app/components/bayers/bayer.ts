import { Product } from '../products/product';

export class Bayer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    products: Product[];

    constructor(id: number, firstName: string, lastName: string, email: string, products?){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.products = products;
    }
}