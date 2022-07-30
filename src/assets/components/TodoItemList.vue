<script lang="ts" setup>
import { ref } from "vue";
import { TodoItemModel, TodoItemState } from "../models/TodoItemModel";
import { useMainStore } from "../store";
import { Check, Delete } from "@element-plus/icons-vue";

const store = useMainStore();

const items = ref<TodoItemModel[]>([]);

const getItemList = (): void => {
  items.value = store.getItems;
};

const deleteElement = async (iter: TodoItemModel): Promise<void> => {
  store.deleteItem(iter.id);
  getItemList();
};

const setStateIsDone = (iter: TodoItemModel): void => {
  store.setItemState(iter.id, TodoItemState.DONE);
};

const setStateIsTodo = (iter: TodoItemModel): void => {
  store.setItemState(iter.id, TodoItemState.TODO);
};

getItemList();
</script>

<template>
  <div v-if="!!items.length">
    <div v-for="(iter, index) in items" :key="index" class="mb-10 w-full">
      <div class="flex flex-row items-center justify-between border-b border-gray-600 py-[5px]">
        <div class="flex items-center">
          <el-button v-if="iter.state === TodoItemState.DONE" type="primary" :icon="Check" circle @click="setStateIsTodo(iter)" />
          <el-button
            v-if="iter.state === TodoItemState.TODO"
            class="shadow-blue-600 hover:shadow-md"
            circle
            @click="setStateIsDone(iter)"
            ><el-icon class="opacity-0"><Check /></el-icon
          ></el-button>
          <div class="ml-[8px] text-left" :class="{ 'line-through': iter.state === TodoItemState.DONE }">
            {{ iter.description }}
          </div>
        </div>
        <el-icon color="red" class="cursor-pointer" @click="deleteElement(iter)"><Delete /></el-icon>
      </div>
    </div>
  </div>
</template>
