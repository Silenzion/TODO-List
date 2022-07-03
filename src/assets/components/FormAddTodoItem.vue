<script lang="ts" setup>
import { ref } from "vue";
import { useMainStore } from "../store";
import { ElMessage } from "element-plus";
import { TodoItemModel, TodoItemState } from "../models/TodoItemModel";
import {Plus} from "@element-plus/icons-vue"

const form = ref<TodoItemModel>(
  new TodoItemModel({
    description: "",
    state: TodoItemState.TODO,
    created_at: new Date(),
  })
);

const store = useMainStore();

const onSubmit = () => {
  if (!form.value.description) return;
  store.createNewItem(form.value);
  showMessage();
  form.value = new TodoItemModel();
};

const showMessage = () => {
  ElMessage({
    showClose: true,
    message: "Задача успешно создана",
    center: true,
    type: "success",
  });
};
</script>

<template>
  <el-form :inline="true" :model="form" class="mb-20 pt-20 text-center">
    <el-form-item>
      <el-input v-model="form.description" type="text" placeholder="Что нужно сделать?" />
    </el-form-item>
    <el-form-item class="!mr-0">
      <el-button type="primary" class="mr-0" :icon="Plus" circle @click="onSubmit" />
    </el-form-item>
  </el-form>
</template>
