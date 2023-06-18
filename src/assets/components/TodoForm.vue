<script lang="ts" setup>
import { ref } from "vue";
import { useMainStore } from "../store";
import TodoItem  from "../models/TodoItem";
import {ETodoItemState} from "../models/ETodoItemState.enum";

const store = useMainStore();

const newTodoItemForm = ref<TodoItem>(
  new TodoItem({
    description: "",
    state: ETodoItemState.TODO,
    created_at: new Date(),
  })
);

const onSubmit = (): void => {
  if (newTodoItemForm.value.description) {
    store.createNewItem(newTodoItemForm.value);
    newTodoItemForm.value = new TodoItem();
  }
};
</script>

<template>
  <div class="todo-item-form">
    <input
      v-model="newTodoItemForm.description"
      class="base-input"
      type="text"
      placeholder="Add new task"
      @keydown.enter="onSubmit"
    />
    <button type="button" class="base-button base-button_success" @click="onSubmit">
      <i class="fa fa-plus" aria-hidden="true"/>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.todo-item-form{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-radius:40px;
  padding: 2.4rem;
  text-align: center;
}
</style>
