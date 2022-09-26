import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

export type ProductModelDocument = ProductModel & Document;

@Schema({ timestamps: true })
export class ProductModel {
    @Prop({ required: true })
    name: string;

    @Prop({ min: 0 })
    unitPrice: number;

    @Prop({ min: 0 })
    salePrice: number;

    @Prop({ required: true, min: 0, default: 0 })
    stock: number;

    @Prop()
    status: string;

    @Prop()
    images: string[];
}

export const ProductModelSchema =
    SchemaFactory.createForClass(ProductModel).plugin(softDeletePlugin);
