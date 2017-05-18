import { Schema, model } from "mongoose";
import { Base } from './Base';

export class Task extends Base {
  TaskListId: {};
  Title: { type: String, required: true };
  Files: [ String ];
}

const schema: Schema = new Schema({ ...Task });
export const Tasks = model("Task", schema);