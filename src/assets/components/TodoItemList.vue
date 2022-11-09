<script lang="ts" setup>
import { computed } from "vue";
import { TodoItemModel, TodoItemState } from "../models/TodoItemModel";
import { useMainStore } from "../store";

const store = useMainStore();

const deleteElement = async (iter: TodoItemModel): Promise<void> => {
  store.deleteItem(iter.id);
};

const setStateIsDone = (iter: TodoItemModel): void => {
  store.setItemState(iter.id, TodoItemState.DONE);
};

const setStateIsTodo = (iter: TodoItemModel): void => {
  store.setItemState(iter.id, TodoItemState.TODO);
};

const items = computed<TodoItemModel[]>(() => {
  return store.getItems || [];
});
</script>

<template>
  <div v-if="!!items.length" class="mt-[16px] w-full">
    <TransitionGroup name="list" tag="div">
      <div v-for="(iter, index) in items" :key="iter.description" class="mb-[24px] w-full">
        <div class="flex flex-row items-center justify-between py-[5px]">
          <div class="flex items-center">
            <button
              v-if="iter.state === TodoItemState.DONE"
              class="base-btn_circle text-green-700"
              @click="setStateIsTodo(iter)"
            >
              <i class="fa fa-check" aria-hidden="true"></i>
            </button>
            <button
              v-if="iter.state === TodoItemState.TODO"
              class="check-bth base-btn_circle text-gray-600"
              @click="setStateIsDone(iter)"
            >
              <i class="fa fa-check transition-all" aria-hidden="true"></i>
            </button>
            <div class="ml-12 text-left" :class="{ 'line-through': iter.state === TodoItemState.DONE }">
              {{ iter.description }}
            </div>
          </div>
          <button class="base-btn_circle  text-red-700" @click="deleteElement(iter)">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>
<style lang="scss">
.check-bth .fa-check {
  opacity: 0;
}

.check-bth:hover {
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
