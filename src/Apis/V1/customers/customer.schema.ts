import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { Exclude } from 'class-transformer';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

export type CustomerDocument = Customer & Document;

@Schema({ collection: 'customers', timestamps: true })
export class Customer {
    @Prop({ required: true })
    name: string;

    @Prop({ unique: true, required: true })
    phone: string;

    @Prop({ unique: true })
    email: string;

    @Prop({ required: true })
    @Exclude()
    password: string;

    @Prop({ default: 'Customer' })
    role: string;

    @Prop()
    dob: Date;

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }])
    wishlist: Types.ObjectId[];

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Coupon'}])
    coupons: Types.ObjectId[];

    @Prop()
    status: string;
}

export const CustomerSchema =
    SchemaFactory.createForClass(Customer).plugin(softDeletePlugin);
