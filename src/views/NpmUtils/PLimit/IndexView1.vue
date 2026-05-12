<script setup lang="ts">
import { TaskLimit } from "./index";

// const
// console.log(delay(2000));

const asyncDelay = (ms: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

// 返回错误
const asyncDelayRej = (ms: number) => {
  return new Promise((resolve, rejects) => {
    setTimeout(rejects, ms);
  });
};

// 方式1
{
  const task = new TaskLimit(2);

  const addTask = (time: number, name: any, fun: (ms: number) => Promise<unknown>) => {
    const s = Date.now();
    task
      .add(() => fun(time))
      .then(() => {
        console.log(`任务${name}完成-${time}ms，耗时${Date.now() - s}ms`);
      })
      .catch(err => {
        console.error(err);
      });
  };

  // const s = Date.now();
  addTask(10 * 1000, 1, asyncDelayRej);
  addTask(5 * 1000, 2, asyncDelay);
  addTask(3 * 1000, 3, asyncDelay);
  addTask(4 * 1000, 4, asyncDelay);
  addTask(5 * 1000, 5, asyncDelay);
}

// 方式2
{
}
</script>

<template>
  <div>任务并发控制 自己实现</div>
</template>

<style scoped></style>
