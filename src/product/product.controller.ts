import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';

import {CreateProductDTO} from './dto/product.dto'

@Controller('product')
export class ProductController {

    @Post('/')
    createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        console.log(createProductDTO);
        
        return res.status(HttpStatus.OK).json({
            message: 'yolo'
        })
    }

    @Get('/')
    createGet(@Res() res) {
        console.log();
        
        return res.status(HttpStatus.OK).json({
            message: 'yoloso'
        })
    }
}
