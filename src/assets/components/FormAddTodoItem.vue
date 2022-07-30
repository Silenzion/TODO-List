<script lang="ts" setup>
import { ref } from "vue";
import { useMainStore } from "../store";
import { ElMessage } from "element-plus";
import { TodoItemModel, TodoItemState } from "../models/TodoItemModel";
import { Plus } from "@element-plus/icons-vue";

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
  <el-form :model="form" class="flex justify-between text-center">
    <el-form-item class="!mr-[5px] w-full">
      <el-input v-model="form.description" class="el-input_lined" type="text" placeholder="Add new task" />
    </el-form-item>
    <el-form-item class="!mr-0">
      <el-button type="primary" class="mr-0" :icon="Plus" circle @click="onSubmit" />
    </el-form-item>
  </el-form>
</template>

<style lang="scss">
.el-input_lined {
  .el-input__inner {
    border: none;
    border-bottom: 1px solid rgb(75, 85, 99);
    box-shadow: none !important;
    background-color: transparent !important;
    border-radius: 0;

    &:focus {
      border-color: #409eff;
    }
  }
}
</style>
