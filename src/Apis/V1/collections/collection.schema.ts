import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

export type CollectionDocument = Collection & Document;

@Schema({ timestamps: true })
export class Collection {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;
}

export const CollectionSchema =
    SchemaFactory.createForClass(Collection).plugin(softDeletePlugin);
