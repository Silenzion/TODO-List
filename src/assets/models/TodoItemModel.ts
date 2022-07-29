export enum TodoItemState {
  TODO,
  DONE,
}

export class TodoItemModel {
  id: number;
  description: string;
  state: TodoItemState;
  created_at: Date;
  deleted_at?: Date;

  public constructor(init?: Partial<TodoItemModel>) {
    Object.assign(this, init);
  }
}
