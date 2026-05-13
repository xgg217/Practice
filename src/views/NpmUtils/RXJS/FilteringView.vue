<script setup lang="ts">
import { interval, Subject, takeUntil } from "rxjs";

{
  // 2. 停止信号（Subject 专门用来发信号）
  const stop$ = new Subject();

  interval(1000)
    .pipe(takeUntil(stop$))
    .subscribe((num) => {
      console.log("接收：", num);
    });

  // 4. 5秒后发送停止信号
  setTimeout(() => {
    stop$.next(); // 发信号 → 立即停止订阅！
  }, 5000);
}
</script>

<template>
  <div>4.过滤 Filtering</div>
</template>

<style scoped></style>
