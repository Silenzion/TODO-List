<script lang="ts" setup>
import {computed} from "vue";
import {TodoItem} from "../models/TodoItem";
import {useMainStore} from "../store";
import {ETodoItemState} from "../models/ETodoItemState.enum";

const store = useMainStore();

const deleteElement = async (iter: TodoItem): Promise<void> => {
  store.deleteItem(iter.id);
};

const setStateIsDone = (iter: TodoItem): void => {
  store.setItemState(iter.id, ETodoItemState.DONE);
};

const setStateIsTodo = (iter: TodoItem): void => {
  store.setItemState(iter.id, ETodoItemState.TODO);
};

const items = computed<TodoItem[]>(() => {
  return store.getItems || [];
});
</script>

<template>
  <div v-if="!!items.length" class="sm:overflow-visible overflow-y-auto overflow-x-visible w-full px-24 relative">
    <div class="fade-top-block"/>
    <div class="mt-[16px] w-full">
      <TransitionGroup name="list" tag="div">
        <div v-for="iter in items" :key="iter.id" class="todo-item  mb-[24px] w-full">
          <div class="flex flex-row items-center justify-between py-[5px]">
            <div class="flex items-center">
              <button v-if="iter.state === ETodoItemState.DONE" class="base-button text-green-700" @click="setStateIsTodo(iter)">
                <i class="fa fa-check" aria-hidden="true"></i>
              </button>
              <button
                v-if="iter.state === ETodoItemState.TODO"
                class="base-button check-button text-gray-600"
                @click="setStateIsDone(iter)"
              >
                <i class="fa fa-check transition-all" aria-hidden="true"></i>
              </button>
              <div class="ml-12 text-left" :class="{ 'line-through': iter.state === ETodoItemState.DONE }">
                {{ iter.description }}
              </div>
            </div>
            <button class="base-button text-red-700" @click="deleteElement(iter)">
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
          </div>
        </div>
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
