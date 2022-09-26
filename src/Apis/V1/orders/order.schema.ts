import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';
import { OrderProduct } from '../order-products/order-products.schema';

export type OrderDocument = Order & Document;

@Schema({ collection: 'orders', timestamps: true })
export class Order {
    @Prop([
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
            required: true,
        },
    ])
    customer: Types.ObjectId;

    @Prop({ required: true })
    address: string;

    @Prop()
    note: string;

    @Prop([{ type: OrderProduct, required: true }])
    products: OrderProduct[];

    @Prop({ required: true })
    payment: string;

    @Prop({ required: true })
    paymentStatus: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shipment',
        required: true,
    })
    shipment: Types.ObjectId;

    @Prop({ required: true })
    shipmentStatus: string;

    @Prop({ required: true })
    totalOriginalPrice: number;

    @Prop({ required: true })
    totalSalePrice: number;

    @Prop()
    totalSaleCouponPrice: number;

    @Prop({ required: true })
    shippingFee: number;

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Coupon' }])
    coupons: Types.ObjectId[];
}

export const OrderSchema =
    SchemaFactory.createForClass(Order).plugin(softDeletePlugin);
