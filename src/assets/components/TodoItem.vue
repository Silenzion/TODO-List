<script setup lang="ts">
import TodoItem from "@/assets/models/TodoItem";
import {ETodoItemState} from "@/assets/models/ETodoItemState.enum";
import {useMainStore} from "@/assets/store";

const props = defineProps<{
  model: TodoItem
}>();

const store = useMainStore();

const deleteElement = async (): Promise<void> => {
  store.deleteItem(props.model.id);
};

const setStateIsDone = (): void => {
  store.setItemState(props.model.id, ETodoItemState.DONE);
};

const setStateIsTodo = (): void => {
  store.setItemState(props.model.id, ETodoItemState.TODO);
};
</script>
<template>
    <div class="todo-item  mb-[24px] w-full">
      <div class="flex flex-row items-center justify-between py-[5px]">
        <div class="flex items-center">
          <button v-if="model.isDone" class="base-button text-green-700" @click="setStateIsTodo">
            <i class="fa fa-check" aria-hidden="true"></i>
          </button>
          <button
            v-if="model.isToDo"
            class="base-button check-button text-gray-600"
            @click="setStateIsDone"
          >
            <i class="fa fa-check transition-all" aria-hidden="true"></i>
          </button>
          <div class="ml-12 text-left" :class="{ 'line-through': model.isDone }">
            {{ model.description }}
          </div>
        </div>
        <button class="base-button text-red-700" @click="deleteElement">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.todo-item{
  margin-bottom: 2.4rem;
  width: 100%;
}
</style>
