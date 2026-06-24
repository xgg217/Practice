<script setup lang="ts">
import { Plus, House } from "@element-plus/icons-vue";
import type { TItem } from "./types";
import QuestionFilledCmp from "@/views/Custom/Wenjuan/components/QuestionFilledCmp.vue";
import { Db, getList, type TListTime } from "./utils/db";
import dayjs from "dayjs";

const router = useRouter();

const db = new Db();

const tableData = shallowRef<TListTime[]>([]);

// 跳转编辑器
const onEditorView = () => {
  router.push({
    name: "WenjuanEditorView",
  });
};

// 跳转组件市场
const onMaterialsView = () => {
  router.push({
    name: "WenjuanMaterials",
  });

  // setStorage(ROUTE_NAME_MATERIALS);
};

// 详情
const onInfo = (row: TItem) => {
  console.log(row);
};

onMounted(() => {
  db.init()
    .then(() => {
      return getList(db.db!);
    })
    .then((res) => {
      console.log(res);
      if (Array.isArray(res)) {
        tableData.value = res.map((item) => {
          const { count, createdAt, id, updatedAt, title } = item;
          const obj: TListTime = {
            count,
            createdAt: "",
            id,
            updatedAt: "",
            title,
          };

          if (createdAt) {
            obj.createdAt = dayjs(createdAt).format("YYYY-MM-DD HH:mm:ss");
          }
          if (updatedAt) {
            obj.updatedAt = dayjs(updatedAt).format("YYYY-MM-DD HH:mm:ss");
          }

          return obj;
        });
      }
    })
    .catch((err) => {
      console.error(err);
    });
});
</script>

<template>
  <div>
    <h2 class="font-weight-100 text-center">
      问卷调查系统
      <QuestionFilledCmp
        title="参考《腾讯问卷》 https://wj.qq.com/workspace/60061836234/survey/recent"
        placement="bottom"
      />
    </h2>

    <div class="mb-15">
      <el-button type="primary" :icon="Plus" @click="onEditorView">创建问卷</el-button>
      <el-button type="success" :icon="House" @click="onMaterialsView">组件市场</el-button>
    </div>

    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column type="index" width="50" align="center" />
      <el-table-column prop="title" label="问卷标题" align="center" />
      <el-table-column prop="count" label="题目数" width="120" align="center" />
      <el-table-column prop="createdAt" label="创建日期" width="170" align="center" />
      <el-table-column prop="updatedAt" label="更新时间" width="170" align="center" />
      <el-table-column label="操作" fixed="right" width="200" align="center">
        <template #default="{ row }">
          <el-button size="small" @click="onInfo(row)">查看</el-button>
          <el-button size="small" type="primary">编辑</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped></style>
