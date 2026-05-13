<script setup lang="ts">
import { from, map, of } from "rxjs";

// from API响应处理
{
  function fetchUser(userId: number) {
    return from(
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((response) =>
        response.json()
      )
    );
  }

  fetchUser(1)
    .pipe(map((user) => user.name))
    .subscribe((name) => console.log("用户名:", name));
  // 输出: 用户名: Leanne Graham
}

// from 对象属性转换
{
  const users = of(
    {
      id: 1,
      name: "Alice",
      age: 25,
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
    }
  );

  users
    .pipe(
      map((user) => ({
        ...user,
        name: user.name.toUpperCase(),
        isAdult: user.age >= 18,
      }))
    )
    .subscribe(console.log);
}
</script>

<template>
  <div>2.创建 Creation</div>
</template>

<style scoped></style>
