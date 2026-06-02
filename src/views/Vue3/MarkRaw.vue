<script setup lang="ts">
const foo = markRaw({});
console.log(isReactive(reactive(foo))); // false

// 也适用于嵌套在其他响应性对象
const bar = reactive({ foo });
console.log(isReactive(bar.foo)); // false
</script>

<template>
  <div>1</div>
</template>

<style scoped></style>
