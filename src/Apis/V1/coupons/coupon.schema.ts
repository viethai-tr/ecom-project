import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

export type CouponDocument = Coupon & Document;

@Schema({ collection: 'coupons', timestamps: true })
export class Coupon {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    type: string;

    @Prop({ min: 0 })
    percent: number;

    @Prop({ min: 0 })
    maxAmount: number;
}

export const CouponSchema =
    SchemaFactory.createForClass(Coupon).plugin(softDeletePlugin);
