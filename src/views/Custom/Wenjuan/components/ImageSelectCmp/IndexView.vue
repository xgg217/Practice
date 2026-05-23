<script setup lang="ts">
import UploadImgCmp from "./UploadImgCmp.vue";

const props = withDefaults(
  defineProps<{
    picTitle?: string;
    picDesc?: string;
    value?: string;
    index?: number;
  }>(),
  {
    picTitle: "",
    picDesc: "",
    value: "",
    index: 0,
  },
);
</script>

<template>
  <div class="img-box mb-5" @click.stop>
    <div class="img">
      <UploadImgCmp />
    </div>
    <div class="text">
      <p>{{ props.picTitle }}</p>

      <!-- 备注说明 -->
      <p>{{ props.picDesc }}</p>
    </div>
  </div>
</template>

<style scoped>
.img-box {
  width: 200px;
  height: 300px;
  border: 1px solid var(--font-color-lightest);
  border-radius: var(--border-radius-md);
  color: var(--font-color-light);
  display: flex;
  flex-direction: column;
}

.img {
  height: 200px;
  background-color: var(--font-color-lightest);
  display: flex;
  align-items: center;
  justify-content: center;
}

.text {
  /* border: 1px solid #000; */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
    width: 100%;
    /*height: auto;*/
    word-wrap: break-word;
    line-break: anywhere;
    word-wrap: break-word;
    word-break: break-all;
    white-space: normal;
    /*border: 1px solid #000;*/
    text-align: center;
  }
}
</style>
