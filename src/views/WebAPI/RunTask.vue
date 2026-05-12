<script setup lang="ts">
const val = ref(0);

// const a = [1,2];
// a.forEach()

type callbackfn = () => void;

const runTask = (task: callbackfn) => {
  return new Promise((res) => {
    _runTask(task, res);
  });
};

const _runTask = (task: callbackfn, cb: callbackfn) => {
  requestIdleCallback((deadline) => {
    if (deadline.timeRemaining() > 0) {
      task();
      cb();
    } else {
      _runTask(task, cb);
    }
  });
};

const delay = () => {
  const duration = 5;
  const start = Date.now();
  while (Date.now() - start < duration) {}
};

const n = 1000;
const tasks: callbackfn[] = new Array(n).fill(delay);
console.log(tasks);

const onClick = () => {
  val.value = 0;
  console.group("开始执行");

  const start = Date.now();
  const arr = tasks.map((item) => runTask(item));
  Promise.all(arr).then(() => {
    const end = Date.now();
    val.value = end - start;
    console.log(val.value);

    console.groupEnd();
  });
};
</script>

<template>
  <div>
    <ul>
      <li>运行一个耗时任务</li>
      <li>如果要异步执行任务，请返回promise</li>
      <li>要尽快完成任务，同时不要让页面产生卡顿</li>
      <li>运行耗时 {{ val }} ms</li>
    </ul>

    <el-button type="primary" @click="onClick">运行</el-button>

    <div class="boxs">
      <div class="q"></div>
    </div>
  </div>
</template>

<style scoped>
.boxs {
  position: relative;
  top: 0;
  left: 0;
  width: 500px;
  height: 500px;
  border: 1px solid #000;
}

.boxs div {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
  animation: 4s linear 0s mymove infinite;
  will-change: transform;
}

@keyframes mymove {
  0% {
    /* transform: translate(0px, 0px);  */
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(450px, 0px);
  }
  50% {
    transform: translate(450px, 450px);
  }
  75% {
    transform: translate(0px, 450px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
