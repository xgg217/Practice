<script setup lang="ts">
import PQueue from "p-queue";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { data } from "./consts";
import axios from "axios";

const idleVal = ref(0); // 完成的数量190300
const errArr: string[] = [];
// let isStart = false;
const queue = new PQueue({
  concurrency: 6, // 同时执行的任务数，默认为1
});

let s = 0;

queue.on("active", () => {
  idleVal.value += 1;
});

queue.on("error", (err) => {
  // idleVal.value += 1;
  console.log(err);

  // 可以把取消内容添加到后续队列中继续执行
});

// 创建一个新的 JSZip 实例
const zip = new JSZip();

const start = async () => {
  errArr.length = 0;
  // isStart = true;
  s = Date.now();

  // data.forEach(item => {

  // })
  try {
    queue.addAll(
      data.map((key) => {
        return () => asyncApi(key.trackingNumber, key.fileUrl);
      }),
    );
    // for (const key of data) {
    //   queue.add(() => asyncApi(key.trackingNumber, key.fileUrl));
    // }
  } catch (error) {
    console.error(error);
  }

  queue.onIdle().then(async () => {
    console.log("所有任务都已执行完毕");
    console.log(Date.now() - s);

    if (errArr.length > 0) {
      const str = errArr.join("\n");
      zip.file("下载错误.txt", str);
    }
    // // 生成 zip 文件
    const content = await zip.generateAsync({ type: "blob" });
    // // 使用 file-saver 保存 zip 文件
    saveAs(content, "名字");
  });
};

const pause = () => {
  queue.pause();
};

// 暂停后继续请求
const pausestart = () => {
  queue.start();
};

const asyncApi = (name: string, url: string) => {
  // 下载文件
  return axios({ url, method: "get", responseType: "blob", timeout: 2000 * 10 })
    .then((res) => {
      // console.log(res.data);
      zip.file(name + ".pdf", res.data);
    })
    .catch((err) => {
      console.error(err);
      errArr.push(`下载失败: ${name}  ${url}`);
    });
};
</script>

<template>
  <div>
    <el-button type="primary" @click="start">开始{{ idleVal }}</el-button>
    <el-button type="primary" @click="pause">暂停</el-button>
    <el-button type="primary" @click="pausestart">继续</el-button>
  </div>
</template>

<style scoped></style>
