<script setup lang="ts">
import FormAddTodoItem from "@/assets/components/FormAddTodoItem.vue";
import TodoItemList from "./assets/components/TodoItemList.vue";
</script>
<template>
  <div class="flex min-h-screen items-center justify-center">
    <el-card class="flex w-[415px] flex-col items-center">
      <div class="mb-20 text-left font-bold">TO DO LIST</div>
      <FormAddTodoItem />
      <TodoItemList />
    </el-card>
  </div>
</template>
<style lang="scss">
.el-card__body {
  width: 100%;
}
</style>
