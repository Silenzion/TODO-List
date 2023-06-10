import { ETodoItemState } from "../models/ETodoItemState.enum";
import  TodoItem  from "../models/TodoItem";
import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";
import { faker } from '@faker-js/faker';

export type RootState = {
  items: TodoItem[];
};

export const useMainStore = defineStore({
  id: "mainStore",
  state: () =>
    ({
      items: <TodoItem[]>[
        new TodoItem({
          id: uuid(),
          description: faker.word.sample(),
          state: ETodoItemState.TODO,
          created_at: new Date(),
        }),
        new TodoItem({
          id: uuid(),
          description: faker.word.sample(),
          state: ETodoItemState.DONE,
          created_at: new Date(),
        }),
      ],
    } as RootState),
  getters: {
    getItems: (state) => state.items.sort((a, b) => b.created_at.getTime() - a.created_at.getTime()),
  },
  actions: {
    createNewItem(dto: TodoItem): void {
      this.items.push(new TodoItem(dto));
    },

    setItemState(id: string, state: ETodoItemState): void {
      const item = this.items.find((item) => item.id === id);
      if (item) {
        item.state = state;
      }

    },

    deleteItem(id: string): void {
      const index = this.findIndexById(id);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },

    findIndexById(id: string): number {
      return this.items.findIndex((item) => item.id === id);
    },
  },
});
