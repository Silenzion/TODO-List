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
  <div class="new-item-form flex w-full items-center justify-between rounded-lg p-24 text-center">
    <input
      v-model="todoForm.description"
      class="base-input"
      type="text"
      placeholder="Add new task"
      @keydown.enter="onSubmit"
    />
    <button type="button" class="base-button text-green-700" @click="onSubmit">
      <i class="fa fa-plus" aria-hidden="true"/>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.new-item-form{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-radius:40px;
  padding: 2.4rem;
  text-align: center;
}
</style>
