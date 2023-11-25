import { faker } from "@faker-js/faker";
import { createPinia, setActivePinia } from "pinia";
import { v4 as uuid } from "uuid";
import { ETodoItemState } from "../src/assets/models/ETodoItemState.enum";
import TodoItem from "../src/assets/models/TodoItem";
import { useMainStore } from "../src/assets/store";

describe("main store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("init state", () => {
    const mainStore = useMainStore();
    expect(mainStore.items).toHaveLength(2);
  });

  test("get items", () => {
    const mainStore = useMainStore();
    expect(mainStore.getItems).toHaveLength(2);
  });

  test("create new item", () => {
    const dto: TodoItem = new TodoItem({
      id: uuid(),
      description: faker.word.sample(),
      state: ETodoItemState.DONE,
      created_at: new Date(),
    });
    const mainStore = useMainStore();
    expect(mainStore.getItems).toHaveLength(2);
    mainStore.createNewItem(dto);
    expect(mainStore.getItems).toHaveLength(3);
  });

  test("delete item", () => {
    const mainStore = useMainStore();
    expect(mainStore.getItems).toHaveLength(2);
    const firstItemId = mainStore.getItems[0].id;
    mainStore.deleteItem(firstItemId);
    expect(mainStore.getItems).toHaveLength(1);
  });

});
