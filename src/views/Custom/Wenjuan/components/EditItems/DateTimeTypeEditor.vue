<template>
  <div class="position" :key="props.id">
    <div class="mb-10">{{ props.editName }}</div>

    <el-select @change="changeType" placeholder="日期类型" v-model="text" style="width: 100px">
      <el-option
        v-for="item in status"
        :key="item.value"
        :label="item.status"
        :value="item.value"
      />
    </el-select>
  </div>

  <!-- <ButtonGroup title="日期类型" :status="status[currentStatus]!.status">
    <el-select @change="changeType" placeholder="日期类型" style="width: 100px">
      <el-option
        v-for="item in status"
        :key="item.value"
        :label="item.status"
        :value="item.value"
      />
    </el-select>
  </ButtonGroup> -->
</template>

<script setup lang="ts">
import type { VueComType } from "@/views/Custom/Wenjuan/types/common";
import type { ValueStatusArr } from "@/views/Custom/Wenjuan/types/editProps";
// import EventBus from "@/views/Custom/Wenjuan/MaterialsView/eventBus";
import type { UpdateStatus } from "@/views/Custom/Wenjuan/types/editProps";

const props = defineProps<{
  id: string;
  currentStatus: number;
  status: ValueStatusArr;
  isShow: boolean;
  configKey: string;
  editCom: VueComType;
  editName: string;
}>();

const text = ref(props.status[props.currentStatus]!.status);

const updateStatus = inject<UpdateStatus>("updateStatus")!;

const typeArr = props.status.map((item) => item.value);
function changeType(newVal: string) {
  const index = typeArr.indexOf(newVal);
  if (index !== -1) {
    // text.value = typeArr[index];

    updateStatus("UPDATE:OPTION:DATE_TIME", { name: props.configKey, value: index });
    // EventBus.emit("UPDATE:OPTION:DATE_TIME", {
    //   name: props.configKey,
    //   value: index,
    // });
  }
}
</script>

<style scoped src="@/views/Custom/Wenjuan/MaterialsView/style.css"></style>
