<script lang="ts" setup>
import TodoItem from "../models/TodoItem";
import {useMainStore} from "../store";
import {ETodoItemState} from "../models/ETodoItemState.enum";
import TodoItemEl from "../components/TodoItemEl.vue"

const store = useMainStore();

const deleteElement = async (item: TodoItem): Promise<void> => {
  store.deleteItem(item.id);
};

const setStateIsDone = (item: TodoItem): void => {
  store.setItemState(item.id, ETodoItemState.DONE);
};

const setStateIsTodo = (item: TodoItem): void => {
  store.setItemState(item.id, ETodoItemState.TODO);
};
</script>

<template>
  <div v-if="!!store.getItems.length" class="todo-list">
    <div class="fade-top-block"/>
    <div class="todo-list__items">
      <TransitionGroup name="list" tag="div">
        <TodoItemEl v-for="item in store.getItems" :key="item.id"  :model="item" @delete="deleteElement(item)"
                  @setDone="setStateIsDone(item)" @setTodo="setStateIsTodo(item)"/>
      </TransitionGroup>
    </div>
    <div class="fade-bottom-block"/>
  </div>
</template>

<style lang="scss" scoped>
.todo-list{
  overflow: visible;
  width: 100%;
  padding: 0 2.4rem;
  position: relative;

  @media (max-width: 600px) {
    overflow-y: auto;
    overflow-x: hidden;
  }

  &__items{
    margin-top: 1.6rem;
    width: 100%;
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
