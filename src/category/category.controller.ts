import { Controller, Get } from '@nestjs/common';

@Controller('category')
export class CategoryController {

    @Get()
    getAll():string {
        return 'This is category listds';
    }


}
