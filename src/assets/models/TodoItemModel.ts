import { v4 as uuidv4 } from "uuid";
// @ts-ignore
import * as faker from "faker";

export enum TodoItemState {
  TODO,
  DONE,
  DELETED,
}

export class TodoItemModel {
  id: number | string;
  description: string;
  state: TodoItemState;
  created_at: Date;
  deleted_at?: Date;
}
export function generateFakeData(): TodoItemModel {
  return {
    id: uuidv4(),
    description: faker.lorem.words(),
    state: TodoItemState.TODO,
    created_at: new Date(),
  };
}
