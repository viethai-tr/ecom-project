import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

export type OrderProductDocument = OrderProduct & Document;

@Schema({ timestamps: true })
export class OrderProduct {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    })
    product: Types.ObjectId;

    @Prop({ required: true, min: 0 })
    originalPrice: number;

    @Prop({ required: true, min: 0 })
    salePrice: number;

    @Prop({ required: true, min: 1 })
    quantity: number;
}

export const OrderProductSchema =
    SchemaFactory.createForClass(OrderProduct).plugin(softDeletePlugin);
