import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

export type CategoryDocument = Category & Document;

@Schema({ timestamps: true })
export class Category {
    @Prop({ required: true })
    name: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
    parentId: Types.ObjectId;
}

export const CategorySchema =
    SchemaFactory.createForClass(Category).plugin(softDeletePlugin);
