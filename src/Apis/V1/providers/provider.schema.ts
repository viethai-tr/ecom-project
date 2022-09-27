import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import mongoose, { Collection, Document, Types } from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';
import { CollectionSchema } from '../collections/collection.schema';

export type ProviderDocument = Provider & Document;

@Schema({ timestamps: true })
export class Provider {
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true })
    @Exclude()
    password: string;

    @Prop({ default: 'Provider' })
    role: string;

    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop({ default: 0, min: 0 })
    productsQuantity: number;

    @Prop({ default: 0, min: 0 })
    followers: number;

    @Prop({ required: true })
    location: string;

    @Prop([{ type: CollectionSchema }])
    collections: Collection[];

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Coupon' }])
    coupons: Types.ObjectId[];

    @Prop()
    status: string;
}

export const ProviderSchema =
    SchemaFactory.createForClass(Provider).plugin(softDeletePlugin);
