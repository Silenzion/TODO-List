<script lang="ts" setup>
import {  ref } from "vue";
import { TodoItemModel, TodoItemState } from "../models/TodoItemModel";
import { useMainStore } from "../store";
import { Delete, Check, CircleCheck } from "@element-plus/icons-vue";

const store = useMainStore();

const items = ref<TodoItemModel[]>([]);

const getItemList = () => {
  items.value = store.getItems;
};

const deleteElement = async (iter) => {
  store.deleteItem(iter.id);
  getItemList();
};

const setStateIsDone = (iter) =>{
  store.set
}

getItemList();
</script>

<template>
  <div v-if="!!items.length">
    <div v-for="(iter, index) in items" :key="index" class="mb-10">
      <div class="flex w-full flex-row items-center justify-between rounded-sm bg-blue-100 p-[5px]">
        <el-button v-if="iter.state === TodoItemState.DONE" type="success" :icon="CircleCheck" circle />
        <el-button v-if="iter.state === TodoItemState.TODO" type="secondary" circle
          ><el-icon class="opacity-0 hover:opacity-100"><Check /></el-icon
        ></el-button>
        <div :class="{ 'line-through': TodoItemState.DONE }">{{ iter.description }}</div>
        <el-button type="danger" :icon="Delete" circle @click="deleteElement(iter)" />
      </div>
    </div>
  </div>
</template>
