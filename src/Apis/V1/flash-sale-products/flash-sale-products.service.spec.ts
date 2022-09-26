import { Test, TestingModule } from '@nestjs/testing';
import { FlashSaleProductsService } from './flash-sale-products.service';

describe('FlashSaleProductsService', () => {
  let service: FlashSaleProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlashSaleProductsService],
    }).compile();

    service = module.get<FlashSaleProductsService>(FlashSaleProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
