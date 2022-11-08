<script setup lang="ts">
import FormAddTodoItem from "@/assets/components/FormAddTodoItem.vue";
import TodoItemList from "./assets/components/TodoItemList.vue";
</script>

<template>
  <div class="flex min-h-screen items-center justify-center px-10">
    <div
      class="base-card flex min-h-[380px] w-full max-w-[415px] flex-col items-center rounded-lg bg-gray-300 transition-all duration-300"
    >
      <div class="mb-20 text-left font-bold">TO DO LIST</div>
      <FormAddTodoItem />
      <TodoItemList />
    </div>
  </div>
</template>
