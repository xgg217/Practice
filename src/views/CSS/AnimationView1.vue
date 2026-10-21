<script setup lang="ts"></script>

<template>
  <div>
    动画 钟摆效果

    <div class="box1"></div>
  </div>
</template>

<style scoped>
.box1 {
  width: 200px;
  height: 200px;
  margin: 400px auto;
  border-radius: 50%;
  background-color: #f00;
  transform-origin: center -800px;
  /* transform: rotate(45deg); */
  animation: rotate 2s 0.5s ease-in-out 2 both;
}
@keyframes rotate {
  0%,
  100% {
    transform: rotate(30deg);
  }
  50% {
    transform: rotate(-30deg);
  }
}
</style>
