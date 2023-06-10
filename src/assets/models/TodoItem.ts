import { v4 as uuid } from "uuid";
import { ETodoItemState } from "./ETodoItemState.enum";

export class TodoItem {
  id: string;
  description: string;
  state: ETodoItemState;
  created_at: Date;

  public constructor(dto?: Partial<TodoItem>) {
    this.id = dto?.id || uuid();
    this.description = dto?.description || "";
    this.state = ETodoItemState.TODO;
    this.created_at = dto.created_at || new Date();
  }

  get isDone():boolean{
    return this.state === ETodoItemState.DONE;
  }

  get isToDo():boolean{
    return this.state === ETodoItemState.TODO;
  }
}
