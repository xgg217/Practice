<template>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    :show-close="false"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    width="50%"
  >
    <p>全部数量{{ bankFlowNum }}</p>
    <el-progress
      style="margin-top: 20px"
      :percentage="progress"
      :text-inside="true"
      :stroke-width="24"
      :status="progress === 100 ? 'success' : undefined"
    ></el-progress>
    <p style="margin-top: 20px">
      <span>成功数量{{ +successNum }}</span>
      <span style="margin-left: 100px">失败数量{{ failNum }} </span>
    </p>

    <div class="but">
      <!-- 继续 -->
      <el-button :disabled="!isStart" type="primary" @click="onStart">继续</el-button>

      <!-- 暂停 -->
      <el-button :disabled="!isPause" type="info" @click="onPause">暂停</el-button>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button :disabled="!isCancel" @click="dialogVisible = false">取消</el-button>

        <!-- 确认生成流水 -->
        <el-button :disabled="!isSecond" type="primary" @click="ifGenerateBankFlow"
          >确认生成流水</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
// import { useI18n } from "vue-i18n";
import PQueue from "p-queue";
// import {
//   apiGenerateIcmsSearchCallback,
//   apiDel,
//   apiSpIcmsReapply,
//   apiExport,
//   apiItemExport,
//   getBankFlowNum,
//   apiBankFlow,
//   exportTrackingNum,
// } from "/@/api/backend/finance/fazendaSpIcms";
// import { goResourceExportList } from "/@/utils/goExportList";
// import { asyncApiRes, asyncApiRej } from "@/utils/async";
import { ElMessageBox } from "element-plus";

// const props = defineProps({});

const isHistory = ref(false);

// const bankFlowNum = ref(0); // 需要生成的银行流水数量
// const progress = ref(0); // 进度
const doneNum = ref(0); // 完成的数量
const successNum = ref(0); // 成功数量
const failNum = ref(0); // 失败数量
const idList = shallowRef<number[]>([]); // id集合

const dialogVisible = ref(false);
const isSecond = ref(true); // 确定 是否可以点击
const isPause = ref(false); // 暂停 是否可以点击
const isStart = ref(false); // 开始 是否可以点击
const isCancel = ref(true); // 取消 是否可以点击

// 定义一个响应式变量来存储失败的 id
// const failedIds = ref<number[]>([]);

// const loading = ref(false);

// 标题
const title = computed(() => {
  return isHistory.value
    ? "finance.fazendaSpIcms.historyGenerateBankFlow"
    : "finance.fazendaSpIcms.GenerateBankFlow";
});

// 需要生成的银行流水数量
const bankFlowNum = computed(() => {
  return idList.value.length;
});

// 进度
const progress = computed(() => {
  if (bankFlowNum.value === 0) {
    return 0;
  }

  return Math.floor((doneNum.value / bankFlowNum.value) * 100);
});

const queue = new PQueue({
  concurrency: 2, // 同时执行的任务数，默认为1
});

// 完成了一个任务时（触发多次）
queue.on("active", (a) => {
  // console.log(`Working on item #${++count}.  Size: ${queue.size}  Pending: ${queue.pending}`);
  console.log(a);

  doneNum.value += 1;

  successNum.value = doneNum.value - failNum.value;
});

// 存在错误时
queue.on("error", (error) => {
  console.error(error);
  failNum.value += 1;
});

// 所有任务执行完毕时
queue.on("idle", () => {
  console.log(`Queue is idle.  Size: ${queue.size}  Pending: ${queue.pending}`);
  isPause.value = false; // 暂停按钮不能点击了
  isStart.value = false; // 开始按钮不能点击了
  isCancel.value = true; // 取消按钮可以点击了
});

// 开始
const onStart = () => {
  isPause.value = true; // 暂停按钮可以点击了
  isStart.value = false; // 开始按钮不能点击了
  isCancel.value = false; // 取消按钮不可以点击了
  queue.start(); // 恢复执行
};

// 暂停
const onPause = () => {
  isPause.value = false; // 暂停按钮不能点击了
  isStart.value = true; // 开始按钮可以点击了
  isCancel.value = true; // 取消按钮可以点击了
  queue.pause();
};

// 获取请求 数据
const asyncGetBankFlowNum = () => {
  // const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  // idList.value = a.map(() => {
  //   if (Math.random() > 0.5) {
  //     return () => asyncApiRes(2000);
  //   } else {
  //     return () => asyncApiRej(1000);
  //   }
  // });
  // idList.value = [
  //   () => Promise.resolve(1),
  //   () => Promise.resolve(2),
  //   () => Promise.reject(3),
  //   () => Promise.resolve(4),
  //   () => Promise.resolve(5),
  //   () => Promise.reject(6),
  //   () => Promise.resolve(7),
  //   () => Promise.reject(8),
  //   () => Promise.reject(9),
  //   () => Promise.resolve(10),
  //   () => Promise.reject(11),
  //   () => Promise.resolve(12),
  //   () => Promise.reject(13),
  //   () => Promise.resolve(14),
  //   () => Promise.reject(15),
  // ];
  // getBankFlowNum({
  //   ...query,
  //   generateHistory: isHistoryVal,
  // })
  //   .then(res => {
  //     if (res && res.code === 1) {
  //       if (Array.isArray(res.data) && res.data.length > 0) {
  //         idList.value = res.data;
  //       }
  //     }
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   });
};

// 确认生成流水
const ifGenerateBankFlow = () => {
  ElMessageBox.confirm("确定？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      isSecond.value = false; // 确定按钮不能点击了
      isCancel.value = false; // 确定按钮不能点击
      isPause.value = true; // 暂停按钮可以点击了

      // queue = new PQueue({
      //   concurrency: 2, // 同时执行的任务数，默认为1
      // });

      // 开始执行
      idList.value.forEach((res) => {
        // apiBankFlow({ id });
        queue.add(() => Promise.resolve(res));
      });

      console.log("队列状态:", {
        isPaused: queue.isPaused, // 队列是否被暂停[citation:5]
        pending: queue.pending, // 当前正在执行的任务数[citation:5]
        size: queue.size, // 队列中等待的任务数[citation:5]
      });

      console.log(queue.runningTasks);

      // queue.onIdle().then(() => {
      //   // console.log("所有任务都已执行完毕");

      // });
    })
    .catch(() => {
      console.error("错误");
    });
};

// 导出生成失败数据
// const downloadFailData = async () => {
//   apiExport({ ids: failedIds.value })
//     .then(res => {
//       if (res && res.code === 1) {
//         goResourceExportList();
//       }
//     })
//     .catch(err => {
//       console.error(err);
//     });
// };

/**
 * 打开
 * @param {boolean} isHistoryVal 是否历史
 * @param {anyObj} query 查询参数
 */
const open = (isHistoryVal: boolean) => {
  isHistory.value = isHistoryVal;

  // progress.value = 0; // 进度
  doneNum.value = 0;
  successNum.value = 0; // 成功数量
  failNum.value = 0; // 失败数量
  idList.value = [];

  isSecond.value = true;
  isPause.value = false;
  isStart.value = false;
  isCancel.value = true;

  dialogVisible.value = true;

  queue.clear();

  // asyncGetBankFlowNum(isHistoryVal, query);
  asyncGetBankFlowNum();
};

onMounted(() => {
  console.log(11);
});

defineExpose({
  open,
});
</script>

<style scoped>
.but {
  margin-top: 20px;
}
</style>
