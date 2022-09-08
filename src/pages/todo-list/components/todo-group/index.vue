<!-- <template lang="pug">
.txt-h3.txt-bold {{ props.title }}
todo-item(:items="item" v-for="item in props.items" :key="item.id" v-bind="$attrsa")
</template>
  
<script setup>
import { defineProps } from 'vue'
import TodoItem from '../todo-item'
const props = defineProps({ title: String, items: Array })

</script>
  
<script>
export default {
  name: 'todo-group'
}
</script> -->

<template lang="pug">
.txt-h3.txt-bold {{ props.title }}
todo-item(:items="item" v-for="item in props.items" :key="item.id" @refresh="refreshHandle" @clear="clearHandle")
</template>
  
<script setup>
import { defineProps, defineEmits } from 'vue'
import TodoItem from '../todo-item'
const props = defineProps({ title: String, items: Array })
const emits = defineEmits(['refresh', 'clear'])

const refreshHandle = value => emits('refresh', value)
const clearHandle = value => emits('clear', value)

</script>
  
<script>
export default {
  name: 'todo-group'
}
</script>
  
<!-- <template lang="pug">
.txt-h3.txt-bold {{ props.title }}
.flex.items-center.txt-h5(:class="{ 'txt-minor': item.isFinished }" v-for="item in props.items" :key="item.id")
  el-checkbox.pd-r-8(v-model="item.isFinished" @change="v => changeHandle(v, item)")
  .flex-1.pd-v-8(@click="changeHandle(!item.isFinished, item)") {{ item.text }}
  delete.txt-h3(style="width: 1em; height: 1em" @click="clearHandle(item)")
</template>
  
<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({ title: String, items: Array })
const emits = defineEmits(['refresh', 'clear'])

const changeHandle = (value, item) => emits('refresh', { ...item, isFinished: value })

const clearHandle = (item) => emits('clear', item)
</script>
  
<script>
export default {
  name: 'todo-group'
}
</script> -->
  