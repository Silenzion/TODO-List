<script lang="ts" setup>
import { nextTick, ref } from "vue";
import { TodoItemModel } from "../models/TodoItemModel";
import { useMainStore } from "../store";

const store = useMainStore();

const items = ref<TodoItemModel[]>([]);

const getItemList = () => {
  items.value = store.getItems;
};

const deleteElement = async (iter) => {
  store.deleteItem(iter.id);
  getItemList();
};
getItemList();
</script>

<template>
  <div v-if="!!items.length">
    <el-card v-for="(iter, index) in items" :key="index" class="box-card mb-10">
      <div class="flex w-full flex-row justify-between">
        <div>{{ iter.description }}</div>
        <el-button @click.stop="deleteElement(iter)">Удалить</el-button>
      </div>
    </el-card>
  </div>
</template>
