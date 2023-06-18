import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";
import TodoItem from "../src/assets/components/TodoItem.vue";
import { ETodoItemState } from "../src/assets/models/ETodoItemState.enum";
import TodoItemModel from "../src/assets/models/TodoItem";

const TEST_TEXT = "Tests is fine!"

describe("TodoItem.vue",()=>{

  beforeEach(() => {
    setActivePinia(createPinia())
  });

  test("render test", ()=>{
    const wrapper = mount(TodoItem,{props:new TodoItemModel()});
    expect(wrapper.findAll('.todo-item')).toHaveLength(1);
    expect( wrapper.get('.todo-item__desc').text()).toBe("");

  });

  test("todo state",()=>{
    const todoTask = new TodoItemModel({
      description: TEST_TEXT,
      state: ETodoItemState.TODO
    });
    const wrapper = mount(TodoItem,{
      props:{
        model: todoTask
      }
    });
    const doneBtn = wrapper.find('.todo-item__done-button');
    const todoBtn = wrapper.find('.todo-item__todo-button');
    expect(wrapper.classes()).contain("todo-item_todo");
    expect(todoBtn.exists()).toBe(false);
    expect(doneBtn.exists()).toBe(true);
  });

  test("done state",()=>{
    const doneTask = new TodoItemModel({
      description: TEST_TEXT
    });
  // TODO:дописать
  });

  test('Delete', async () => {
    const wrapper = mount(TodoItem,{props:{model: new TodoItemModel()}})
    const deleteBtn = wrapper.find('.todo-item__delete-button')
    expect(deleteBtn.exists()).toBe(true);

    await deleteBtn.trigger('click');
    expect(wrapper.exists()).toBe(false);
  })
});
