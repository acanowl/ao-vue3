<template lang="pug">
.txt-h3.txt-bold.pd-t-8 Drag Box demo1 {{ cellPos.top }} {{ cellPos.left }}
.flex-1.pr.border.pd-h-8.pd-v-8.mr-t-8(ref="gragContainter")
  .pa.drag-cell(:style="cellPos" @mousedown="onMounsedownListent" @mouseup="onMounseupListent")
</template>

<script setup>
import { ref } from 'vue'

const gragContainter = ref(null)
const isDraged = ref(false) // 是否点击了 开始拖拽
const cellPos = ref({})
const innerPos = ref({})

const wrapWidth = ref(0)
const wrapHeight = ref(0)
const boxWidth = ref(0)
const boxHeight = ref(0)

const onMounsedownListent = e => {
  isDraged.value = true
  innerPos.value = {
    top: e.clientY - parseFloat(getComputedStyle(e.target).top),
    left: e.clientX - parseFloat(getComputedStyle(e.target).left)
  }
  wrapWidth.value = gragContainter.value.clientWidth
  wrapHeight.value = gragContainter.value.clientHeight
  boxWidth.value = e.target.clientWidth
  boxHeight.value = e.target.clientHeight
}
const verifyPos = (value, type = 'left') => {
  const wrapValue = type === 'top' ? wrapHeight.value : wrapWidth.value
  const boxValue = type === 'top' ? boxHeight.value : boxWidth.value
  if (value <= 0) {
    value = 0
  } else if (value >= (wrapValue - boxValue)) {
    value = wrapValue - boxValue
  }
  return value + 'px'
}
const onMounsemoveListent = e => {
  if (isDraged.value) {
    const top = verifyPos(e.clientY - innerPos.value.top, 'top')
    const left = verifyPos(e.clientX - innerPos.value.left, 'left')
    cellPos.value = { top, left }
  }
}
document.addEventListener('mousemove', onMounsemoveListent)

const onMounseupListent = e => {
  isDraged.value = false
  document.removeEventListener('mousemove', null)
}

</script>

<script>
export default {
  name: 'drag-box-demo1'
}
</script>

<style lang="scss">
.drag-cell {
  left: 0px;
  top: 0px;
  width: 30px;
  height: 30px;
  background: red;
}
</style>
    