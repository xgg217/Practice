<template>
  <!-- 代码展示 支持自动设置格式 支持复制 -->
  <div class="code">
    <pre class="pre" v-if="!isOverflow">{{ text }}</pre>

    <!-- 内容截取 -->
    <template v-else>
      <p class="text">{{ text }}</p>
      <span class="tips">出显示限制，请复制到外部查看</span>
    </template>

    <el-button type="primary" class="copy" size="small" @click="onCopy">复制</el-button>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { isJSON } from "es-toolkit";

const props = defineProps<{ val: string }>();

const isOverflow = ref(false); // 是否超出显示限制
const MB = 1024 * 1024 * 0.5;

const onCopy = () => {
  navigator.clipboard
    .writeText(props.val)
    .then(() => {
      ElMessage.success("复制成功");
    })
    .catch((err) => {
      console.error(err);
    });
};

const text = computed(() => {
  try {
    // 判断当前为 JSON
    if (isJSON(props.val)) {
      // 如果当前JSON过大则不进行格式化
      if (props.val.length > MB) {
        isOverflow.value = true;
        return props.val;
      }

      isOverflow.value = false;

      return JSON.parse(props.val);
    }

    isOverflow.value = false;
    return props.val;
  } catch (error) {
    console.error(error);
    return props.val;
  }
});
</script>

<style scoped>
.code {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.pre,
.text {
  width: 100%;
  background: #f2f2f2;
  border: 1px solid #d7d7d7;
  padding: 25px 10px;
  box-sizing: border-box;
}

.pre {
  min-height: 50px;
  max-height: 400px;
  overflow: auto;
  width: 100%;
  /* white-space: pre-wrap; */
  scroll-behavior: smooth;
}

.text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  .tips {
    position: absolute;
    bottom: 0px;
    right: 10px;
    font-size: 12px;
    color: #909399;
  }
}

.copy {
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
}
</style>
