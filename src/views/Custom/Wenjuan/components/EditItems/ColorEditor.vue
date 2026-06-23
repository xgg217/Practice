<template>
  <!-- <div>颜色编辑组件</div> -->
  <div class="position" :key="props.id">
    <p>{{ props.editName }}</p>

    <el-color-picker
      v-model="color1"
      @change="(val: string | null) => changePosition(val as string)"
    />
  </div>
</template>

<script setup lang="ts">
import type { TFontColor } from "@/views/Custom/Wenjuan/types/config";
import type { Events } from "@/views/Custom/Wenjuan/types/eventBus";
import type { UpdateStatus } from "@/views/Custom/Wenjuan/types/editProps";

const props = defineProps<
  TFontColor & {
    configKey: string;
  }
>();

const updateStatus = inject<UpdateStatus>("updateStatus")!;

const color1 = ref(props.status);

const changePosition = (color: string) => {
  const obj = {
    name: props.configKey,
    value: color,
  } as Events["UPDATE:TITLE_COLOR"];

  if (props.configKey === "titleColor") {
    updateStatus("UPDATE:TITLE_COLOR", obj);
  } else if (props.configKey === "descColor") {
    updateStatus("UPDATE:DESC_COLOR", obj);
  } else {
    console.error("类型错误，要求类型为 titleColor 或 descColor");
  }
};
</script>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
<style scoped></style>
