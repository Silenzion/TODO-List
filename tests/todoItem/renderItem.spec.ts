import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";
import TodoItem from "../../src/assets/components/TodoItem.vue";
import TodoItemModel from "../../src/assets/models/TodoItem";


describe("renderTodoItem",()=>{
  const DESC = "Tests is fine!";

  beforeEach(() => {
    setActivePinia(createPinia())
  });

  const model = new TodoItemModel({
    description: DESC
  });


  test("simpleRender", ()=>{
    const wrapper = mount(TodoItem,{
      props:{
        model: model
      }
    });
    const todo = wrapper.get('.todo-item');
    const title = wrapper.get('.todo-item__desc')

    expect(title.text()).toBe(DESC);
    expect(wrapper.findAll('.todo-item')).toHaveLength(1);
  });
});
