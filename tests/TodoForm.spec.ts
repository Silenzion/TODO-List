import { mount } from "@vue/test-utils";
import { describe } from "vitest";
import { expect, test } from "vitest/index";
import TodoForm from "../src/assets/components/TodoForm.vue";

describe("TodoForm.vue",()=>{
  test("render", ()=> {
    const wrapper = mount(TodoForm);
    expect(wrapper.findAll('.todo-item-form')).toHaveLength(1);
  });
});
