<script setup lang="ts">
import {
  // fromEvent,
  // map,
  // filter,
  // debounceTime,
  // distinctUntilChanged,
  // switchMap,
  // from,
  // catchError,
  // of,
  Subject,
  tap,
} from "rxjs";

const keyword = ref("");

const inputRef = useTemplateRef("inputRef");

// const search$ = new Subject<string>();
// .pipe(
//   map((e: Event) => (e.target as HTMLInputElement).value.trim()), // 取值并去除两端空白
//   filter((text) => text.length > 0), // 过滤空输入
//   debounceTime(500), // 防抖：500ms内没有新输入才继续
//   distinctUntilChanged(), // 去重：只有输入变化才继续
//   // 版本号+取消前一个请求解决竞态问题
//   switchMap((keyword) =>
//     from(
//       fetch(`https://jsonplaceholder.typicode.com/posts?q=${encodeURIComponent(keyword)}`).then(
//         (res) => res.json(),
//       ),
//     ).pipe(
//       // 错误兜底
//       catchError((err) => {
//         console.error("搜索请求失败:", err);
//         return of({ items: [] }); // 出错时返回空结果
//       }),
//     ),
//   ),
// )
// .subscribe((data) => {
//   // results.innerHTML = data.items.map((item) => `<li>${item}</li>`).join("");
//   console.log(data);
// });

const input$ = new Subject<string>();

input$
  .pipe(
    tap((n) => {
      console.log(n);
    }),
  )
  .subscribe({ next: console.log, error: (err) => console.log(err.message) });

const onInput = (e: string) => {
  // console.log(inputRef.value);
  console.log(e);

  // const value = (e.target as HTMLInputElement).value;
  // keyword.value = value;
  // input$.next(value);
};
</script>

<template>
  <el-card style="width: 480px">
    <template #header>
      <div class="card-header">
        <span>switchMap 切换</span>
      </div>
    </template>

    <el-input v-model="keyword" placeholder="Please input" ref="inputRef" @input="onInput" />
    <el-button type="primary">搜索</el-button>
  </el-card>
</template>

<style scoped></style>
