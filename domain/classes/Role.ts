import { Schema, model } from "mongoose";
import { Base } from './base';

export class Role extends Base {
  Name: { type: String, required: true };
};

const schema: Schema = new Schema({ ...Role });
export const Roles = model("Role", schema);
