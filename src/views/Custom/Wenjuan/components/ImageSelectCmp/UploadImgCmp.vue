<script setup lang="ts">
import { Upload, ZoomIn, Delete } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";

// 图片上传
const { inputRef, acceptStr, onImgUploadClick, onImgUploadChange } = (() => {
  const inputRef = ref<HTMLInputElement>();
  const fize = 5;
  const MAX_SIZE = fize * 1024 * 1024;
  const IMAGE_TYPE = Object.freeze([".png", ".gif", ".jpeg", ".jpg"]);
  const acceptStr = computed(() => {
    return IMAGE_TYPE.join(",");
  });

  // 校验
  const check = (file: File) => {
    // 添加文件验证逻辑
    if (!IMAGE_TYPE.includes("." + file.name.split(".").pop()?.toLowerCase())) {
      console.error("文件格式错误");
      ElMessage.error("文件格式错误");
      return false;
    }

    if (file.size > MAX_SIZE) {
      console.error("File size exceeds limit");
      ElMessage.error(`请选择图片小于 ${fize}M 的图片`);
      return false;
    }
    return true;
  };

  const onImgUploadClick = async () => {
    inputRef.value?.click();
  };

  const onImgUploadChange = async (e: Event) => {
    // console.log(e);
    const target = e.target as HTMLInputElement;
    if (!target || !target.files || target.files.length === 0) {
      console.warn("No file selected");
      return;
    }
    const file = target.files[0]!;

    // 校验
    {
      const isBool = check(file);
      if (!isBool) {
        // @ts-expect-error 清空数据
        inputRef.value.value = null;
        return;
      }
    }
    imgUrl.value = window.URL.createObjectURL(file);
    // @ts-expect-error 清空数据
    inputRef.value.value = null;
  };

  return { inputRef, acceptStr, onImgUploadClick, onImgUploadChange };
})();

// 图片查看 图片删除
const { imgUrl, srcList, isPreview, onImgInfo, onImgDel } = (() => {
  const imgUrl = ref("");
  const srcList = ref<string[]>([]);
  const isPreview = ref(false);

  // 详情
  const onImgInfo = () => {
    console.log("详情");
    srcList.value = [imgUrl.value];
    isPreview.value = true;
  };

  // 删除
  const onImgDel = () => {
    imgUrl.value = "";
  };

  return {
    srcList,
    imgUrl,
    isPreview,
    onImgInfo,
    onImgDel,
  };
})();
</script>

<template>
  <div class="upload">
    <div v-if="imgUrl.length" class="img">
      <el-image :src="imgUrl" class="img" fit="contain" />

      <!-- 蒙层 -->
      <div class="mask">
        <div>
          <el-button type="primary" :icon="ZoomIn" circle @click="onImgInfo" />
          <el-button type="danger" :icon="Delete" circle @click="onImgDel" />
        </div>
      </div>
    </div>

    <div v-else>
      <el-button type="primary" @click.stop="onImgUploadClick">
        上传<el-icon class="el-icon--right"><Upload /></el-icon>
      </el-button>

      <input
        type="file"
        name=""
        ref="inputRef"
        v-show="false"
        @change="onImgUploadChange"
        :accept="acceptStr"
      />
    </div>

    <!-- 图片预览 -->
    <el-image-viewer
      v-if="isPreview"
      :url-list="srcList"
      show-progress
      :initial-index="0"
      @close="isPreview = false"
    />
  </div>
</template>

<style scoped>
/* .upload {
  border: 1px solid red;
} */

.img {
  width: 200px;
  height: 200px;
  /* border: 1px solid #000; */

  .mask {
    position: absolute;
    top: 0;
    left: 10px;
    display: none;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    background-color: rgb(0, 0, 0, 0.4);
  }
}

.img:hover .mask {
  display: flex;
}
</style>
