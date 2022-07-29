<script setup lang="ts">
import FormAddTodoItem from "@/assets/components/FormAddTodoItem.vue";
import TodoItemList from "./assets/components/TodoItemList.vue";
</script>
<template>
  <div class="flex min-h-screen w-full items-center justify-center">
    <el-card class="flex max-w-[480px] flex-col items-center">
      <div class="mb-20 text-left font-bold">TO DO LIST</div>
      <FormAddTodoItem />
      <TodoItemList />
    </el-card>
  </div>
</template>
