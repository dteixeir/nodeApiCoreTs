import { Schema, Model, model } from "mongoose";
import { Base } from './base';


export class TaskList extends Base {
  TaskListId: {};
  Title: { type: String, required: true };
  Tasks: [
    { type: Schema.Types.ObjectId, ref: 'Task' }
  ];
}

const schema: Schema = new Schema({ ...TaskList });
export const TaskLists = model("TaskList", schema);