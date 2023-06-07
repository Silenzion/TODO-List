<script lang="ts" setup>
import { ref } from "vue";
import { useMainStore } from "../store";
import { TodoItem } from "../models/TodoItem";
import {ETodoItemState} from "../models/ETodoItemState.enum";

const store = useMainStore();

const todoForm = ref<TodoItem>(
  new TodoItem({
    description: "",
    state: ETodoItemState.TODO,
    created_at: new Date(),
  })
);

const onSubmit = (): void => {
  if (todoForm.value.description) {
    store.createNewItem(todoForm.value);
    todoForm.value = new TodoItem();
  }
};
</script>

<template>
  <div class="flex w-full items-center justify-between rounded-lg p-24 text-center">
    <input
      v-model="todoForm.description"
      class="base-input"
      type="text"
      placeholder="Add new task"
      @keydown.enter="onSubmit"
    />
    <button type="button" class="base-button text-green-700" @click="onSubmit">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>
  </div>
</template>
