import { Schema, Model, model } from "mongoose";
import { Base } from './base';

export class ErrorLog extends Base {
  Message: { type: String, required: true };
  File: { type: String, required: true };
  Route: { type: String };
  Collection: { type: String };
};

const schema: Schema = new Schema({ ...ErrorLog });
export const ErrorLogs = model("ErrorLog", schema);