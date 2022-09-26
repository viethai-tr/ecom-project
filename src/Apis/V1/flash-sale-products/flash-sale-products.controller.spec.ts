import { Test, TestingModule } from '@nestjs/testing';
import { FlashSaleProductsController } from './flash-sale-products.controller';

describe('FlashSaleProductsController', () => {
  let controller: FlashSaleProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlashSaleProductsController],
    }).compile();

    controller = module.get<FlashSaleProductsController>(FlashSaleProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
