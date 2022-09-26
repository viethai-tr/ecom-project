import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { softDeletePlugin } from 'soft-delete-plugin-mongoose';

export type ShipmentDocument = Shipment & Document;

@Schema({ collection: 'shipments', timestamps: true })
export class Shipment {
    @Prop({ required: true })
    type: string;

    @Prop({ required: true, min: 0 })
    unitPrice: number;
}

export const ShipmentSchema =
    SchemaFactory.createForClass(Shipment).plugin(softDeletePlugin);
