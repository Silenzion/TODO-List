import { TodoItemModel, TodoItemState } from "@/assets/models/TodoItemModel";
import { defineStore } from "pinia";

export type RootState = {
  items: TodoItemModel[];
};

export const useMainStore = defineStore({
  id: "mainStore",
  state: () =>
    ({
      items: <TodoItemModel[]>[
        new TodoItemModel({
          id: 1,
          description: "Read book",
          state: TodoItemState.TODO,
          created_at: new Date(),
        }),
        new TodoItemModel({
          id: 2,
          description: "Watch cinema",
          state: TodoItemState.DONE,
          created_at: new Date(),
        }),
      ],
    } as RootState),
  getters: {
    getItems: (state) => state.items.sort((a, b) => b.created_at.getTime() - a.created_at.getTime()),
    getLastIndex: (state): string | number | boolean => {
      if (!!state.items?.length) {
        return state.items.reduce((prev: number, cur: TodoItemModel) => {
          if (prev > cur.id) {
            return prev;
          }
          return cur.id;
        }, 0);
      } else {
        return false;
      }
    },
  },
  actions: {
    createNewItem(item: TodoItemModel): void {
      if (!item) return;
      item.state = TodoItemState.TODO;
      item.created_at = new Date();
      item.id = this.getLastIndex !== false ? +this.getLastIndex + 1 : 0;
      this.items.push(item);
    },

    setItemState(id: number, state: TodoItemState): void {
      const item = this.items.find((item) => item.id === id);
      if (!item) return;
      item.state = state;
    },

    deleteItem(id: number): void {
      const index = this.findIndexById(id);

      if (index === -1) return;

      this.items.splice(index, 1);
    },

    findIndexById(id: number): number {
      return this.items.findIndex((item) => item.id === id);
    },
  },
});
