<script setup lang="ts"></script>

<template>
  <div class="card">
    <p class="title">标题</p>
    <ul>
      <li>选项1</li>
      <li>选项2</li>
      <li>选项3</li>
      <li>选项4</li>
      <li>选项5</li>
    </ul>
  </div>
</template>

<style scoped>
.title {
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  font-weight: 500;
  margin-bottom: 0;
}

ul {
  margin-bottom: 3px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  li {
    /* border: 1px solid #000; */
    cursor: pointer;
    height: 16px;
    line-height: 16px;
    font-size: 14px;
    padding: 8px 4px;
    box-sizing: content-box;
    white-space: nowrap;
    vertical-align: middle;
    background: #f7f7f7;
    border-radius: 4px;

    &:hover {
      transform: none;
      color: #0f6bff;
      background-color: #f5f9ff;
    }
  }
}
</style>
