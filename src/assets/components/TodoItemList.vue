<script lang="ts" setup>
import { ref } from "vue";
import { TodoItemModel, TodoItemState } from "../models/TodoItemModel";
import { useMainStore } from "../store";
import { Check, CircleCheck, Delete } from "@element-plus/icons-vue";

const store = useMainStore();

const items = ref<TodoItemModel[]>([]);

const getItemList = (): void => {
  items.value = store.getItems;
};

const deleteElement = async (iter): Promise<void> => {
  store.deleteItem(iter.id);
  getItemList();
};

const setStateIsDone = (iter): void => {
  store.setItemState(iter.id, TodoItemState.DONE);
};

getItemList();
</script>

<template>
  <div v-if="!!items.length">
    <div v-for="(iter, index) in items" :key="index" class="mb-10">
      <div class="flex w-full flex-row items-center justify-between border-b border-cyan-700 p-[5px]">
        <div>
          <el-button v-if="iter.state === TodoItemState.DONE" type="success" :icon="CircleCheck" circle />
          <el-button v-if="iter.state === TodoItemState.TODO" type="secondary" circle
            ><el-icon v-if="iter.state === TodoItemState.DONE" class="opacity-0 hover:opacity-100"><Check /></el-icon
          ></el-button>
          <div class="text-left" :class="{ 'line-through': iter.state === TodoItemState.DONE }">{{ iter.description }}</div>
        </div>
        <el-icon color="red" class="cursor-pointer" @click="deleteElement(iter)"><Delete /></el-icon>
      </div>
    </div>
  </div>
</template>
