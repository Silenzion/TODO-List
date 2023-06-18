import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";
import TodoForm from "../src/assets/components/TodoForm.vue";
import { useMainStore } from "../src/assets/store";

const TEST_TEXT = "Tururu";

describe("TodoForm.vue",()=>{
  beforeEach(() => {
    setActivePinia(createPinia())
  });

  test("render", ()=> {
    const wrapper = mount(TodoForm);
    expect(wrapper.findAll('.todo-item-form')).toHaveLength(1);
  });

  test('sets the value', async () => {
    const wrapper = mount(TodoForm);
    const input = wrapper.find('input');
    await input.setValue(TEST_TEXT);

    expect(input.element.value).toBe(TEST_TEXT);
  });

  test("create new item", async () => {
    const store = useMainStore();
    const startItemsLength = store.items.length;
    const wrapper = mount(TodoForm);

    /** Try to create item with empty desc*/
    await wrapper.find('button').trigger('click');
    expect(startItemsLength === store.items.length).toBe(true);

    /** Try to create item with not empty desc*/
    await wrapper.find('input').setValue(TEST_TEXT);
    await wrapper.find('button').trigger('click');
    expect(store.items.length === startItemsLength +1).toBe(true);
  });
});
