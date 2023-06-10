import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";
import TodoItem from "../../src/assets/components/TodoItem.vue";
import TodoItemModel from "../../src/assets/models/TodoItem";

describe("renderTodoItem",()=>{
  beforeEach(() => {
    setActivePinia(createPinia())
  });
  const model = new TodoItemModel({
    description:
"Tests is fine!"
  });
  test("simpleRender", ()=>{
    const wrapper = mount(TodoItem,{
      props:{
        model: model
      }
    });
    expect(wrapper.find('.todo-item')).toHaveLength(1);
  });
});
