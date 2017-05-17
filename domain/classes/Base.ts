import { Schema } from 'mongoose';

export class Base {
  CreatedBy: { type: Schema.Types.ObjectId, ref: 'User' };
  UpdatedBy: { type: Schema.Types.ObjectId, ref: 'User' };
  IsActive: { type: Boolean, default: true, required: true };
  IsDeleted: { type: Boolean, default: false, required: false };
}