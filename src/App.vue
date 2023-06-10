<script setup lang="ts">
import FormAddTodoItem from "@/assets/components/FormAddTodoItem.vue";
import TodoItemList from "./assets/components/TodoItemList.vue";
</script>

<template>
  <div class="flex min-h-screen items-center justify-center sm:px-10">
    <div
      class="base-card"
    >
      <div class="mb-20 text-left font-bold">TO DO LIST</div>
      <FormAddTodoItem />
      <TodoItemList />
    </div>
  </div>
</template>

<style lang="scss"></style>
