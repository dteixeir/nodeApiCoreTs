import { Schema, Model, model } from "mongoose";
import { Base } from './base';

export class User extends Base {
  FirstName: { type: String, required: true };
  MiddleName: { type: String };
  LastName: { type: String, required: true };
  Email: { type: String, required: true };
  Number: { type: String };
  Username: { type: String, required: true };
  Password: { type: String, required: true };
  Role: [
    { type: Schema.Types.ObjectId, ref: 'Role' }
  ];
}

// abstract this out?
const schema: Schema = new Schema({ ...User });
export const Users = model("Users", schema);
