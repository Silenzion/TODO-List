<script lang="ts" setup>
import {TodoItem} from "../models/TodoItem";
import {useMainStore} from "../store";

const store = useMainStore();

</script>

<template>
  <div v-if="!!store.getItems.length" class="sm:overflow-visible overflow-y-auto overflow-x-visible w-full px-24 relative">
    <div class="fade-top-block"/>
    <div class="mt-[16px] w-full">
      <TransitionGroup name="list" tag="div">
        <TodoItem v-for="iter in store.getItems" :key="iter.id" >
        </TodoItem>
      </TransitionGroup>
    </div>
    <div class="fade-bottom-block"/>
  </div>
</template>

<style lang="scss">
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
