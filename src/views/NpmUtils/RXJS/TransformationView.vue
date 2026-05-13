<script setup lang="ts">
import { of, map, scan } from "rxjs";

{
  // 示例1：简单数值转换
  of(1, 2, 3)
    .pipe(map((x) => x * 2))
    .subscribe((result) => console.log(result));
  // 输出: 2, 4, 6
}

// scan
{
  const numbers$ = of(1, 2, 3);

  numbers$
    .pipe(
      // Get the sum of the numbers coming in.
      scan((total, n) => total + n, 10) // 累加器 结果 1 3 6
      // tap((n) => {
      //   console.log(n);
      // }),
      // // Get the average by dividing the sum by the total number
      // // received so far (which is 1 more than the zero-based index).
      // map((sum, index) => sum / (index + 1))
      // tap((n) => {
      //   console.log(n);
      // })
    )
    .subscribe(console.log);
  // 输出: 1, 1.5, 2
}
</script>

<template>
  <div>转换 Transformation.md</div>
</template>

<style scoped></style>
