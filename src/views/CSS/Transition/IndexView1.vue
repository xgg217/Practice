<script setup lang="ts"></script>

<template>
  <div>
    过渡 定格动画

    <div class="box1"></div>
  </div>
</template>

<style scoped>
.box1 {
  width: 50px;
  height: 72px;
  border: 1px solid #000;
  background-image: url(./01.jpg);
  background-position-x: 0px;
}
.box1:hover {
  transition: 2s steps(10);
  background-position: -500px;
}
</style>
