export enum TodoItemState {
  TODO,
  DONE,
  DELETED,
}

export class TodoItemModel {
  id?: number | string;
  description: string;
  state: TodoItemState;
  created_at: Date;
  deleted_at?: Date;

  public constructor(init?: Partial<TodoItemModel>) {
    Object.assign(this, init);
  }
}

export function generateFakeData(): TodoItemModel {
  return new TodoItemModel({
    description: "Task",
    state: TodoItemState.TODO,
    created_at: new Date(),
  });
}
