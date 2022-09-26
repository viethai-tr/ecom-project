import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

export type CustomerAddressDocument = CustomerAddress & Document;

@Schema({ timestamps: true })
export class CustomerAddress {
    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    name: string;

    @Prop()
    status: string;
}

export const CustomerAddressSchema =
    SchemaFactory.createForClass(CustomerAddress).plugin(softDeletePlugin);
