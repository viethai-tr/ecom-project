import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

export type CollectionDocument = Collection & Document;

@Schema({ timestamps: true })
export class Collection {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }])
    products: Types.ObjectId[];
}

export const CollectionSchema =
    SchemaFactory.createForClass(Collection).plugin(softDeletePlugin);
