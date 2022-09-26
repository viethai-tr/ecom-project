import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

export type SaleProductDocument = SaleProduct & Document;

@Schema({ timestamps: true })
export class SaleProduct {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    })
    product: Types.ObjectId;

    @Prop({ required: true, min: 0 })
    salePrice: number;

    @Prop({ required: true, min: 0 })
    totalQuantity: number;

    @Prop({ required: true, min: 0 })
    remainingQuantity: number;
}

export const SaleProductSchema =
    SchemaFactory.createForClass(SaleProduct).plugin(softDeletePlugin);
