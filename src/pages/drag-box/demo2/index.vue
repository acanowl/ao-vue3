<template lang="pug">
.txt-h3.txt-bold.pd-t-8 Drag Box demo2
.flex-1.flex
  material-list
  .material-list.border.rounded-m.pd-h-8.pd-v-8.mr-t-8.mr-r-8
  .flex-1.pr.border.rounded-m.pd-h-8.pd-v-8.mr-t-8
</template>

<script setup>
import MaterialList from './components/material-list'
import { ref, computed } from 'vue'
import { useTodoStore } from "@/stores"
</script>

<script>
export default {
  name: 'drag-box-demo2'
}
</script>

<style lang="scss">
.material-list {
  width: 100px;
}
</style>
    