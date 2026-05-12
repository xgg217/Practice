<script setup lang="ts">
// import DaiCmp from "./components/DaiCmp.vue";

const DaiCmp = defineAsyncComponent(() => import("./components/DaiCmp.vue"));

const del = () => {
  const arr = [];
  for (let i = 1174; i < 1619; i++) {
    arr.push(i);
  }
  fetch("https://adminhom.brtfk.com/admin/auth/rule/del", {
    method: "DELETE",
    body: JSON.stringify({ ids: arr }),
    headers: {
      batoken: "80f524d2-c475-491b-a0e0-ab1d31364b6d",
      "content-type": "application/json",
    },
  });
};

const daiRef = useTemplateRef<InstanceType<typeof DaiCmp>>("daiRef");
const index = ref(0);
const open = () => {
  index.value++;
  setTimeout(() => {
    daiRef.value?.open(false);
  }, 10);
};
</script>

<template>
  <div>
    <button type="button" @click="del">请求</button>
    <button type="button" @click="open">打开</button>
  </div>

  <DaiCmp :key="index" ref="daiRef" />
</template>

<style scoped></style>
