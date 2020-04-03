import { Schema, model } from "mongoose";
import { Base } from './base';


export class TaskList extends Base {
  TaskListId: {};
  Title: { type: String, required: true };
  Tasks: [
    { type: Schema.Types.ObjectId, ref: 'Task' }
  ];
}

let schema: Schema = new Schema({ ...TaskList });
export let TaskLists = model("TaskList", schema);