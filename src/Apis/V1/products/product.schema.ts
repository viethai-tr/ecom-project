import mongoose, { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
    ProductModel,
    ProductModelSchema,
} from '../product-model/product-model.schema';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';
import { Review, ReviewSchema } from '../reviews/review.schema';

export type ProductDocument = Product & Document;

@Schema({ collection: 'products', timestamps: true })
export class Product {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider',
        required: true,
    })
    provider: Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Brand' })
    brand: Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
    category: Types.ObjectId;

    @Prop([{ type: ProductModelSchema }])
    models: ProductModel[];

    @Prop()
    images: string[];

    @Prop({ required: true, min: 0 })
    unitPrice: number;

    @Prop({ min: 0 })
    salePrice: number;

    @Prop({ required: true, default: 0, min: 0 })
    stock: number;

    @Prop({ min: 0 })
    rate: number;

    @Prop({ default: 0, min: 0 })
    reviewsQuantity: number;

    @Prop({ required: true, min: 0 })
    weight: number;

    @Prop({ default: 0, min: 0 })
    sold: number;

    @Prop()
    condition: string;

    @Prop([{ type: ReviewSchema }])
    reviews: Review[];

    @Prop()
    status: string;
}

export const ProductSchema =
    SchemaFactory.createForClass(Product).plugin(softDeletePlugin);
