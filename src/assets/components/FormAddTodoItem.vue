<script lang="ts" setup>
import { ref } from "vue";
import { useMainStore } from "../store";
import { TodoItemModel, TodoItemState } from "../models/TodoItemModel";

const store = useMainStore();

const todoForm = ref<TodoItemModel>(
  new TodoItemModel({
    description: "",
    state: TodoItemState.TODO,
    created_at: new Date(),
  })
);

const onSubmit = (): void => {
  if (!todoForm.value.description) return;
  store.createNewItem(todoForm.value);
  todoForm.value = new TodoItemModel();
};
</script>

<template>
  <div class="flex w-full items-center justify-between rounded-lg py-24 text-center">
    <input
      v-model="todoForm.description"
      class="base-input mr-[10px] h-[40px] w-full"
      type="text"
      placeholder="Add new task"
      @keydown.enter="onSubmit"
    />
    <button type="button" class="base-btn_circle text-green-700" @click="onSubmit">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>
  </div>
</template>
