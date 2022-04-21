<script lang="ts" setup>
import { ref } from "vue";
import { useMainStore } from "../store";
import { ElMessage } from "element-plus";
import { TodoItemModel, TodoItemState } from "../models/TodoItemModel";

const form = ref<TodoItemModel>(
  new TodoItemModel({
    description: "",
    state: TodoItemState.TODO,
    created_at: new Date(),
  })
);

const store = useMainStore();

const onSubmit = () => {
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
  <el-form :inline="true" :model="form" class="mb-20 border border-gray-100 pt-20 text-center">
    <el-form-item>
      <el-input v-model="form.description" type="text" placeholder="Что нужно сделать?" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
    </el-form-item>
  </el-form>
</template>
