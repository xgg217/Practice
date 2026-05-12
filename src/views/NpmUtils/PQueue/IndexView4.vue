<script setup lang="ts">
type Task = () => Promise<unknown>;

const processTasks = (...tasks: Task[]) => {
  let isRunning = false;
  let i = 0;
  const result: unknown[] = [];

  return {
    // 开始
    start() {
      return new Promise((res, rej) => {
        if (isRunning) {
          return;
        }

        isRunning = true;

        while (i < tasks.length) {
          const task = tasks[i];
          try {
            const r = task!();
            result.push(r);
          } catch (e) {
            rej(e);
            result.push(e);
          } finally {
            // isRunning = false;
            i++;
          }

          // 有可能在运行期间任务设置了暂停
          if (!isRunning) {
            return;
          }
        }

        isRunning = false;

        res(result);
      });
    },

    // 暂停
    pause() {
      isRunning = false;
    },
  };
};

const tasks = [];
for (let i = 0; i < 5; i++) {
  tasks.push(() => {
    console.log(`任务 ${i + 1}开始`);
    return new Promise((res) => {
      setTimeout(() => {
        res(i);
        console.log(`任务 ${i + 1}结束`);
      }, 2000);
    });
  });
}

const p = processTasks(...tasks);
</script>

<template>
  <div>
    自定义 任务队列 中断与暂停
    <code>
      <pre>
      1. 依次执行一系列任务
      2. 所有任务全部完成后得到每个任务的执行结果 需要返回 开始和暂停方法
      3. 每个任务不可中断，只能在两个任务中间中断
      </pre>
    </code>

    <el-button type="primary" @click="p.start">开始</el-button>
    <el-button type="primary" @click="p.pause">暂停</el-button>
    <p>参考 https://github.com/sindresorhus/p-queue</p>
  </div>
</template>

<style scoped></style>
