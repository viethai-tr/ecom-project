import { Module } from '@nestjs/common';
import { CustomerAddressController } from './customer-address.controller';
import { CustomerAddressService } from './customer-address.service';

@Module({
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService]
})
export class CustomerAddressModule {}
