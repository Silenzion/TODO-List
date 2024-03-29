<script setup lang="ts">
import TodoItem from "@/assets/models/TodoItem";
import {computed} from "vue";

const emit = defineEmits(['delete', 'setDone', 'setToDo'])
const props = defineProps<{
  model: TodoItem
}>();

const emitDeleteElement = async (): Promise<void> => {
  emit('delete');
};

const emitSetStateIsDone = (): void => {
  emit('setDone');
};

const emitSetStateIsTodo = (): void => {
  emit('setToDo');
};

const classes = computed<Record<string, boolean>>(() => {
  return {
    "todo-item_done": props.model.isDone,
    "todo-item_todo": props.model.isToDo
  }
});
</script>
<template>
  <div class="todo-item" :class="classes">
    <div class="todo-item__content">
      <div class="todo-item__content-left">
        <button v-if="model.isDone" class="todo-item__todo-button base-button base-button_success" @click="emitSetStateIsTodo">
          <i class="fa fa-check" aria-hidden="true"/>
        </button>
        <button
          v-if="model.isToDo"
          class="todo-item__done-button base-button check-button text-gray-600"
          @click="emitSetStateIsDone"
        >
          <i class="fa fa-check transition-all" aria-hidden="true"/>
        </button>
        <div class="todo-item__desc" :class="{ 'todo-item__desc_done': model.isDone }">
          {{ model.description }}
        </div>
      </div>
      <button class="todo-item__delete-button base-button base-button_danger" @click="emitDeleteElement">
        <i class="fa fa-trash-o" aria-hidden="true"/>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.todo-item {
  margin-bottom: 2.4rem;
  width: 100%;

  &__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.5rem;

    &-left {
      display: flex;
      align-items: center;
    }
  }

  &__desc {
    font-size: 1.5rem;
    margin-left: 1.2rem;
    text-align: left;

    &_done {
      text-decoration: line-through;
    }

  }
}

.check-button {
  .fa-check {
    opacity: 0;
  }

  &:hover {
    .fa-check {
      opacity: 1 !important;
    }
  }
}
</style>
