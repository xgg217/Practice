<script setup lang="ts">
const delay = () => {
  const duration = 5000;
  const start = Date.now();
  while (Date.now() - start < duration) {}
};

const onClick = () => {
  delay();
};
</script>

<template>
  <div>
    Transform 死循环也能动

    <el-button @click="onClick" type="primary">死循环</el-button>

    <div class="box1">
      <div class="box1-1"></div>
      <div class="box1-2"></div>
    </div>
  </div>
</template>

<style scoped>
.box1 {
  position: relative;
  top: 0;
  left: 0;
  width: 500px;
  height: 500px;
  border: 1px solid #000;
}

.box1 > div {
  position: absolute;
  /* top: 0; */
  left: 0;
  background-color: red;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.box1 > div:first-child {
  top: 0;
  animation: move1 1s alternate infinite ease-in-out;
  will-change: transform;
}

.box1 > div:last-child {
  top: 110px;
  animation: move2 1s alternate infinite ease-in-out;
  will-change: left;
}

@keyframes move1 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(400px, 0);
  }
}

@keyframes move2 {
  0% {
    left: 0;
  }
  100% {
    left: 400px;
  }
}
</style>
