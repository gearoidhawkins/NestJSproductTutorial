import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}
    
    @Post()
    addProduct( @Body('title') prodTitle: string, @Body('description') desc: string, @Body('price') price: number ) {

        const generatedID = this.productsService.insertProduct(prodTitle, desc, price);

        return {id: generatedID}

    }

    @Get()
    getAllProducts()
    {
        return this.productsService.getAllProducts();
    }

    @Get(':id')
    getProduct(@Param('id') proID: string )
    {
        return this.productsService.getSingleProducts(proID);
    }

    @Patch(':id')
    updateProduct( @Param('id') proID: string, @Body('title') prodTitle: string, @Body('description') desc: string, @Body('price') price: number )
    {
        this.productsService.updateProduct(proID, prodTitle, desc, price);
        return null;
    }

    @Delete(':id') // Doesn't accept body
    RemoveProduct(@Param('id') proID: string)
    {
        this.productsService.deleteProduct(proID);

        return null;
    }
}