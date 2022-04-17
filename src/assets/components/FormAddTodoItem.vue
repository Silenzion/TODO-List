<script lang="ts" setup>
import { ref } from "vue";

const form = ref({
  description: "",
});

const onSubmit = () => {
  //  do something
};
</script>
<template>
  <el-form :model="form">
    <el-input v-model="form.description" type="text" placeholder="Что нужно сделать?" />
    <el-button type="primary" @click="onSubmit">Create</el-button>
  </el-form>
</template>
