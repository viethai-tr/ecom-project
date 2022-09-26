import { Module } from '@nestjs/common';
import { ProductModelController } from './product-model.controller';
import { ProductModelService } from './product-model.service';

@Module({
    controllers: [ProductModelController],
    providers: [ProductModelService],
})
export class ProductModelModule {}
