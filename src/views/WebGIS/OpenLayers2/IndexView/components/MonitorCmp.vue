<script setup lang="ts">
import type { FormInstance } from "element-plus";
import { QUALITY_LEVELS } from "@/views/WebGIS/OpenLayers2/config";

const drawer = ref(true);

type RuleForm = {
  id?: number;
  name: string;
  lng: number; // 经度
  lat: number; // 纬度
  allArea: number; // 总面积
  monitorArea: number; // 监测面积
  city: string; // 城市
  status: "on" | "off"; // 设备状态
  quality: number; // 土壤质量
};

const TEM: RuleForm = {
  id: 0,
  name: "",
  lng: 0, // 经度
  lat: 0, // 纬度
  allArea: 0, // 总面积
  monitorArea: 0, // 监测面积
  city: "", // 城市
  status: "on", // 设备状态
  quality: 0, // 土壤质量
};

const ruleFormRef = ref<FormInstance>();

const ruleForm: RuleForm = reactive({
  ...TEM,
});

const rules = {
  name: [
    { required: true, message: "请输入监测点名称", trigger: "blur" },
    { min: 2, max: 20, message: "长度在 2 到 20 个字符之间", trigger: "blur" },
  ],
  city: [{ required: true, message: "超出范围", trigger: "change" }],
  monitorArea: [
    { required: true, message: "请输入监测面积", trigger: "blur" },
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value === 0) {
          callback(new Error("监测面积不能为 0"));
        } else if (value > ruleForm.allArea) {
          callback(new Error("监测面积不能大于总面积"));
        } else {
          callback();
        }
      },
      trigger: "blue",
    },
  ],
  allArea: [
    { required: true, message: "请输入总面积", trigger: "blur" },
    {
      validator: (rule: any, value: any, callback: any) => {
        if (value === 0) {
          callback(new Error("监测面积不能为 0"));
        } else {
          callback();
        }
      },
      trigger: "blue",
    },
  ],
};

const qualityText = computed(() => {
  return QUALITY_LEVELS.find((item) => item.value === ruleForm.quality)?.name;
});
</script>

<template>
  <el-drawer v-model="drawer" title="检测点" direction="rtl" modal-class="map-edit-drawer">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-position="top"
      style="width: 100%"
    >
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入监测点名称" />
      </el-form-item>
      <el-form-item label="经度" prop="lng">
        <el-input v-model.number="ruleForm.lng" disabled>
          <template #append>°E</template>
        </el-input>
      </el-form-item>
      <el-form-item label="纬度" prop="lat">
        <el-input v-model.number="ruleForm.lat" disabled>
          <template #append>°N</template>
        </el-input>
      </el-form-item>
      <el-form-item label="总面积" prop="allArea">
        <el-input
          v-model="ruleForm.allArea"
          type="number"
          placeholder="请输入总面积"
          @blur="ruleForm.allArea = Number(ruleForm.allArea)"
        >
          <template #append>km²</template>
        </el-input>
      </el-form-item>
      <el-form-item label="监测面积" prop="monitorArea">
        <el-input
          v-model="ruleForm.monitorArea"
          type="number"
          placeholder="请输入监测面积"
          @blur="ruleForm.monitorArea = Number(ruleForm.monitorArea)"
        >
          <template #append>km²</template>
        </el-input>
      </el-form-item>
      <el-form-item label="城市" prop="city">
        {{ ruleForm.city }}
      </el-form-item>
      <el-form-item label="设备状态" prop="status">
        <el-switch
          v-model="ruleForm.status"
          active-value="on"
          inactive-value="off"
          active-text="启动"
          inactive-text="关闭"
        />
      </el-form-item>
      <el-form-item label="土壤质量" prop="quality">
        <el-col :span="3">
          {{ qualityText }}
        </el-col>
        <el-col :span="20" :offset="1">
          <el-slider
            v-model="ruleForm.quality"
            :show-tooltip="false"
            :min="0"
            :max="4"
            show-stops
          />
        </el-col>
      </el-form-item>
    </el-form>

    <!-- <template #footer>
      <div style="flex: auto">
        <el-button
          v-if="ruleForm.id === 0"
          type="primary"
          @click="drawerFormCreateSubmit(ruleFormRef)"
          >添加监测点</el-button
        >
        <template v-else>
          <el-button type="primary" @click="drawerFormEidtSubmit(ruleFormRef)"
            >更新数据</el-button
          >
          <el-popconfirm
            title="删除监测点？"
            placement="top-end"
            :teleported="false"
            confirm-button-text="是"
            cancel-button-text="否"
            @confirm="drawerRemoveMonitor"
          >
            <template #reference>
              <el-button type="danger">删除监测点</el-button>
            </template>
          </el-popconfirm>
        </template>
      </div>
    </template> -->
  </el-drawer>
</template>

<style scoped>
.map-edit-drawer {
  inset: 0 0 0 80% !important;
}
</style>
