<script setup lang="ts">
const handleFileChange = (e: Event) => {
  // const file = (e.target as HTMLInputElement)!.files[0];
  // console.log(file);
  // if (!file) {
  //   return;
  //   // const arrayBuffer =
  //   // parsePDF(arrayBuffer).then(result => {
  //   //   console.log(result);
  //   // });
  // }
  // file
  //   .arrayBuffer()
  //   .then((res) => {
  //     return parsePDF(res);
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
};
</script>

<template>
  <el-card style="max-width: 480px">
    <template #header>
      <div class="card-header">
        <span>解析PDF文件</span>
      </div>
    </template>
    <input type="file" ref="pdfFileRef" accept="application/pdf" @change="handleFileChange" />
  </el-card>
</template>

<style scoped></style>
