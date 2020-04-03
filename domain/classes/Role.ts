import { Schema, model } from "mongoose";
import { Base } from './base';

export class Role extends Base {
  Name: { type: String, required: true };
};

let schema: Schema = new Schema({ ...Role });
export let Roles = model("Role", schema);
