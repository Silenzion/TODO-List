import { mount } from "@vue/test-utils";
import {describe,beforeEach,test,expect} from "vitest";
import TodoItemList from "../../src/assets/components/TodoItemList.vue";
import TodoItem from "../../src/assets/components/TodoItem.vue";
import { setActivePinia, createPinia } from 'pinia';

describe("renderTodoList",()=>{
  beforeEach(() => {
    setActivePinia(createPinia())
  });

  test("simpleRender", ()=>{
    const wrapper = mount(TodoItemList);
    expect(wrapper.findAllComponents(TodoItem)).toHaveLength(2);
  });
});

