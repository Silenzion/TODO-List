import { mount } from "@vue/test-utils";
import TodoItemList from "../src/assets/components/TodoItemList.vue";
import TodoItem from "../src/assets/components/TodoItemEl.vue";
import { setActivePinia, createPinia } from 'pinia';

describe("TodoItemList.vue",()=>{
  beforeEach(() => {
    setActivePinia(createPinia())
  });

  test("render", ()=>{
    const wrapper = mount(TodoItemList);
    expect(wrapper.findAllComponents(TodoItem)).toHaveLength(2);
  });
});

