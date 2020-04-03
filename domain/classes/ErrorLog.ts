import { Schema, model } from "mongoose";
import { Base } from './base';

export class ErrorLog extends Base {
  Message: { type: String, required: true };
  File: { type: String, required: true };
  Route: { type: String };
  Collection: { type: String };
};

let schema: Schema = new Schema({ ...ErrorLog });
export let ErrorLogs = model("ErrorLog", schema);