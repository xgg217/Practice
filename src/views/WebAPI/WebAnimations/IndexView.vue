<script setup lang="ts">
import { useTemplateRef, onMounted, ref } from "vue";

const cardRef = useTemplateRef("cardRef");

let animate: Animation;

const onClick = () => {
  animate.play();
};

onMounted(() => {
  animate = cardRef.value!.animate(
    [
      { backgroundColor: "#0ff", offset: 0.5 },
      { backgroundColor: "#0f0", offset: 1 },
    ],
    {
      duration: 2000,
    }
  );
});

const tableData = ref([]);
</script>

<template>
  <button @click="onClick">点击触发</button>
  <div class="card" ref="cardRef"></div>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column type="selection" width="55" align="center" />
    <el-table-column type="index" label="t('No.')" align="center" width="70" />
    <!-- 费用编码 -->
    <el-table-column prop="code" label="t('basicdata.feeType.expenseCode')" align="center" />

    <!-- 费用名称 -->
    <el-table-column prop="name" label="t('basicdata.feeType.expenseName')" align="center" />

    <!-- 费用大类 -->
    <el-table-column
      prop="dictCodeStr"
      label="t('basicdata.feeType.expenseCategory')"
      align="center"
    />

    <!-- 状态 -->
    <el-table-column prop="status" label="t('State')" align="center">
      <template #default="{ row }">
        <el-tag v-if="row.status === 1" type="primary" size="small"> t("Enable") </el-tag>
        <el-tag v-else-if="row.status === 0" type="danger" size="small"> t("Disable") </el-tag>

        <span v-else> </span>·
      </template>
    </el-table-column>
    <el-table-column prop="createTime" align="center" label="t('createDate')" />
  </el-table>
</template>

<style scoped>
.card {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
