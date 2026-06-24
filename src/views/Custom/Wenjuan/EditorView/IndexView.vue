<script setup lang="ts">
import LeftCmp from "./components/LeftCmp/IndexView.vue";
import CenterCmp from "./components/CenterCmp/IndexView.vue";
import RightCmp from "./components/RightCmp.vue";
import { useEditorStore } from "@/stores/wenjuan/useEditor";
import { dispatchStatus } from "@/stores/wenjuan/dispatchStatus.ts";
import type { EditorStore } from "@/views/Custom/Wenjuan/types/store";
import type { OptionsStatus, TypeStatus } from "@/views/Custom/Wenjuan/types/editProps";
import NavCmp from "@/views/Custom/Wenjuan/components/NavCmp.vue";
import { Db, type TRow } from "@/views/Custom/Wenjuan/utils/db.ts";
import { cloneDeep } from "es-toolkit";

const router = useRouter();

const inputVal = ref("问卷编辑");

// 数据仓库
const store = useEditorStore() as unknown as EditorStore;

// 获取当前选中组件的状态数据
// const currentCom = computed(() => store.coms[store.currentComponentIndex]);
const status = computed(() => {
  const { coms, currentComponentIndex } = store;
  return coms[currentComponentIndex]?.status;
});

const updateStatus = (name: string, row: anyObj) => {
  if (!status.value) {
    return;
  }

  dispatchStatus(store, status.value as unknown as TypeStatus | OptionsStatus, name, row);
};

const db = new Db();
db.init();

// 保存
const onSave = () => {
  console.log(111);

  // console.log(db);

  const row: TRow = {
    title: inputVal.value,
    count: 0,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    detail: "",
  };

  // 获取数量
  {
    const obj = cloneDeep(store.getAllComsList)
      .reverse()
      .find((item) => {
        // @ts-expect-error 类型错误
        return item.index !== 0;
      });
    // @ts-expect-error 类型错误
    row.count = obj?.index || 0;
  }

  // 详情
  row.detail = JSON.stringify(cloneDeep(store.coms));

  // 添加数据
  db.addData(row)
    .then((res) => {
      console.log(res);
      router.push({ name: "Wenjuan" });

      // 重置数据
      store.reset();
    })
    .catch((err) => {
      console.error(err);
    });
};

provide("updateStatus", updateStatus);

onUnmounted(() => {
  // 关闭数据库
  db.closeDB();
});
</script>

<template>
  <div>
    <!-- 导航栏 -->
    <NavCmp>
      <template #title>
        <div>
          <!-- <h2 class="font-weight-100 text-center">问卷编辑</h2> -->
          <el-input
            v-model="inputVal"
            size="large"
            show-word-limit
            maxlength="10"
            placeholder="请输入标题"
            style="width: 240px"
          />
        </div>
      </template>

      <template #right>
        <div>
          <el-button type="success" size="small" @click="onSave">保存</el-button>
        </div>
      </template>
    </NavCmp>

    <div class="position">
      <!-- 左 -->
      <div class="box">
        <LeftCmp />
      </div>

      <!-- 中 -->
      <div class="box">
        <CenterCmp />
      </div>

      <!-- 右 -->
      <div class="box right">
        <RightCmp />
      </div>
    </div>
  </div>
</template>

<style scoped>
.position {
  display: grid;
  grid-template-columns: 300px minmax(600px, 1fr) 350px;
  grid-gap: 15px;
  /* height: 80%; */
  background-color: #f5f7fa;
}

.box {
  /* border: 1px solid red; */
  height: calc(100vh - 55px);
  /* border-left: 1px solid var(--el-border-color); */
  background-color: #fff;
  overflow-y: auto;
  box-sizing: border-box;
  /* width: 350px; */
}
</style>
