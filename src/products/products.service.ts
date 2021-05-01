import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, desc: string, price: number) {
        const prodID = Math.random().toString();
        // Create product object
        const newProduct = new Product(prodID, title, desc, price);
        this.products.push(newProduct); // push into array

        return prodID;
    }

    getAllProducts()
    {
        return [...this.products]; // Copies
    }

    getSingleProducts( productiD: string)
    {
        const product = this.findProduct(productiD)[0];

        return {...product};
    }

    updateProduct(productID: string, title: string, desc: string, price: number)
    {
        const [product, index] = this.findProduct(productID);
        const updatedProduct = {...product};
        if(title) {
            updatedProduct.title = title;
        }
        if(desc) {
            updatedProduct.description = desc;
        }
        if(price) {
            updatedProduct.price = price;
        }

        this.products[index] = updatedProduct;
    }

    deleteProduct( productID: string)
    {
        const index = this.findProduct(productID)[1];

        this.products.splice(index, 1);
    }


    private findProduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex( prod => prod.id === id);
        const product = this.products[productIndex];

        if(!product) { throw new NotFoundException('Could not find product') };

        return [product, productIndex];
    }
}