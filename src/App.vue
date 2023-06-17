<script setup lang="ts">
import FormAddTodoItem from "./assets/components/TodoForm.vue";
import TodoItemList from "./assets/components/TodoItemList.vue";
</script>

<template>
  <main class="page">
    <div
      class="base-card"
    >
      <h1 class="page__title">TO DO LIST</h1>
      <FormAddTodoItem />
      <TodoItemList />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.page{
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;

  @media (max-width: 540px){
    padding: 0 1rem;
  }

  &__title{
    margin-bottom: 2rem;
    text-align: left;
    font-weight: bold;
  }
}
</style>
