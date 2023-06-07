import { mount } from "@vue/test-utils";
import TodoItem from "../src/assets/components/TodoItemList.vue";
import { setActivePinia, createPinia } from 'pinia';

describe("renderTodoList",()=>{
  beforeEach(() => {

    setActivePinia(createPinia())
  })

  test("simpleRender", ()=>{
    const wrapper = mount(TodoItem);
    expect(wrapper.findAll(".todo-item")).toHaveLength(1);
  });
});

