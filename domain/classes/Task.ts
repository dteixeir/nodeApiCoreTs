import { Schema, model } from "mongoose";
import { Base } from './Base';

export class Task extends Base {
  TaskListId: {};
  Title: { type: String, required: true };
  Files: [ String ];
}

let schema: Schema = new Schema({ ...Task });
export let Tasks = model("Task", schema);