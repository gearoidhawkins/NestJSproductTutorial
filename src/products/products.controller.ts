import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}
    
    @Post()
    async addProduct( @Body('title') prodTitle: string, @Body('description') desc: string, @Body('price') price: number ) {

        const generatedID = await this.productsService.insertProduct(prodTitle, desc, price);

        return {id: generatedID}

    }

    @Get()
    async getAllProducts()
    {
        const products = await this.productsService.getAllProducts();
        return products;
    }

    @Get(':id')
    async getProduct(@Param('id') proID: string )
    {
        const product = await this.productsService.getSingleProducts(proID);
        return product;
    }

    @Patch(':id')
    async updateProduct( @Param('id') proID: string, @Body('title') prodTitle: string, @Body('description') desc: string, @Body('price') price: number )
    {
        await this.productsService.updateProduct(proID, prodTitle, desc, price);
        return null;
    }

    @Delete(':id') // Doesn't accept body
    async RemoveProduct(@Param('id') proID: string)
    {
        await this.productsService.deleteProduct(proID);
        return null;
    }
}