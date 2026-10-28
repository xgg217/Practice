<script setup lang="ts">
import { Moon, Sunny } from "@element-plus/icons-vue";
import { useTheme } from "@/hooks/useTheme";

const { updateTheme, isDark } = useTheme();

// 暗黑模式切换
// const darkSwitch = ref(isDark.value);
const onDarkSwitch = (val: boolean) => {
  updateTheme(val);
};
</script>

<template>
  <header>
    <div></div>
    <div>
      <!-- 暗黑模式 -->
      <el-switch
        v-model="isDark"
        :active-action-icon="Moon"
        :inactive-action-icon="Sunny"
        style="--el-switch-on-color: #dcdfe6"
        @change="(e) => onDarkSwitch(e as boolean)"
      />
    </div>
  </header>
</template>

<style scoped>
header {
  border: 1px solid red;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
</style>
