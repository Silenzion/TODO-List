import { generateFakeData, TodoItemModel, TodoItemState } from "@/assets/models/TodoItemModel";
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
          description: "Почитать кинигу",
          state: TodoItemState.TODO,
          created_at: new Date(),
        }),
      ],
    } as RootState),
  getters: {
    getItems: (state) => state.items,
    getLastIndex: (state) => (state.items.length ? state.items[state.items?.length - 1].id : false),
  },
  actions: {
    createNewItem(item: TodoItemModel) {
      if (!item) return;
      // @ts-ignore
      item.id = this.getLastIndex !== false ? this.getLastIndex + 1 : 0;
      this.items.push(item);
    },

    updateItem(id: string, payload: TodoItemModel) {
      if (!id || !payload) return;

      const index = this.findIndexById(id);

      if (index !== -1) {
        this.items[index] = generateFakeData();
      }
    },

    deleteItem(id: string) {
      const index = this.findIndexById(id);

      if (index === -1) return;

      this.items.splice(index, 1);
    },

    findIndexById(id: string) {
      return this.items.findIndex((item) => item.id === id);
    },
  },
});
