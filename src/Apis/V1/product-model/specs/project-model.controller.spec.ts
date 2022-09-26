import { Test, TestingModule } from '@nestjs/testing';
import { ProjectModelController } from '../product-model.controller';

describe('ProjectModelController', () => {
  let controller: ProjectModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectModelController],
    }).compile();

    controller = module.get<ProjectModelController>(ProjectModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
