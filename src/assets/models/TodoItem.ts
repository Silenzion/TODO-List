import { ETodoItemState } from "./ETodoItemState.enum";

export class TodoItem {
  id: string;
  description: string;
  state: ETodoItemState;
  created_at: Date;
  deleted_at?: Date;

  public constructor(init?: Partial<TodoItem>) {
    // Object.assign(this, init);
  }
}
