<script lang="ts" setup>
import TodoItem from "./TodoItem.vue";
import {useMainStore} from "../store";

const store = useMainStore();

</script>

<template>
  <div v-if="!!store.getItems.length" class="sm:overflow-visible overflow-y-auto overflow-x-visible w-full px-24 relative">
    <div class="fade-top-block"/>
    <div class="mt-[16px] w-full">
      <TransitionGroup name="list" tag="div">
        <TodoItem v-for="item in store.getItems" :key="item.id"  :model="item"/>
      </TransitionGroup>
    </div>
    <div class="fade-bottom-block"/>
  </div>
</template>

<style lang="scss" scoped>
.check-button .fa-check {
  opacity: 0;
}

.check-button:hover {
  .fa-check {
    opacity: 1 !important;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
