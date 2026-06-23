<!-- 图片选项编辑器 -->
<template>
  <div :key="props.id">
    <div class="flex align-items-center">
      <div class="mr-10">题目选项</div>
      <el-button size="small" :icon="Plus" circle @click="addOptionHandle" />
    </div>
    <div v-for="(item, index) in textArr" :key="index">
      <!-- 选项 -->
      <div class="title mt-10 mb-10 flex align-items-center">
        <span>选项{{ index + 1 }}</span>
        <el-button
          type="danger"
          class="ml-5 delete"
          size="small"
          :icon="Minus"
          circle
          @click="removeOptionHandle(index)"
        />
      </div>
      <!-- 是否上传图片 -->
      <div class="mb-5">
        <div v-if="item.value" class="flex">
          <span class="title mr-5">已上传图片</span>
          <el-link type="primary" @click="deletePic(index)">删除图片</el-link>
        </div>
        <span v-else class="title">未上传图片</span>
      </div>
      <!-- 修改图片标题 -->
      <el-input class="mb-5" v-model="item.picTitle" placeholder="图片标题" />
      <!-- 修改图片描述 -->
      <el-input type="textarea" :rows="3" placeholder="图片描述" v-model="item.picDesc" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus, Minus } from "@element-plus/icons-vue";
import type { VueComType } from "@/views/Custom/Wenjuan/types/common";
import type { PicTitleDescStatusArr } from "@/views/Custom/Wenjuan/types/editProps";
import type { UpdateStatus } from "@/views/Custom/Wenjuan/types/editProps";

import { ElMessage, ElMessageBox } from "element-plus";
const props = defineProps<{
  currentStatus: number;
  status: PicTitleDescStatusArr;
  isShow: boolean;
  configKey: string;
  editCom: VueComType;
  id: string;
}>();

const updateStatus = inject<UpdateStatus>("updateStatus")!;

const textArr = ref(props.status);

const addOptionHandle = () => {
  updateStatus("ADD:OPTION:PIC", { name: props.configKey });
};

// 删除选项
const removeOptionHandle = (index: number) => {
  updateStatus("DELETE:OPTION:PIC", { name: props.configKey, value: index });
};

// 删除图片
const deletePic = (index: number) => {
  ElMessageBox.confirm("是否确认删除已上传的图片？", "警告", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      // 确认删除
      // EventBus.emit("DELETE:PIC:URL", { name: props.configKey, value: index });
      updateStatus("DELETE:PIC:URL", { name: props.configKey, value: index });
    })
    .catch(() => {
      // 取消删除
      ElMessage.info("已取消删除");
    });
};
</script>

<style scoped lang="scss">
.title {
  color: var(--font-color-light);
  font-size: var(--font-size-base);
}
.delete {
  transform: scale(0.8);
}
</style>
