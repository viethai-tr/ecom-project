import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

export type ReviewDocument = Review & Document;

@Schema({ timestamps: true })
export class Review {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' })
    customer: Types.ObjectId;

    @Prop({ required: true, min: 0 })
    rate: number;

    @Prop()
    content: string;

    @Prop()
    images: string[];
}

export const ReviewSchema =
    SchemaFactory.createForClass(Review).plugin(softDeletePlugin);
