import { Module } from '@nestjs/common';
import { FlashSaleProductsController } from './flash-sale-products.controller';
import { FlashSaleProductsService } from './flash-sale-products.service';

@Module({
  controllers: [FlashSaleProductsController],
  providers: [FlashSaleProductsService]
})
export class FlashSaleProductsModule {}
