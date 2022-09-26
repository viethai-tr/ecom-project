import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { SaleProduct } from '../sale-products/sale-product.schema';

export type FlashSaleDocument = FlashSale & Document;

@Schema({ collection: 'flashSales', timestamps: true })
export class FlashSale {
    @Prop({ required: true })
    begin: Date;

    @Prop({ required: true })
    end: Date;

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'SaleProduct' }])
    products: SaleProduct[];
}
