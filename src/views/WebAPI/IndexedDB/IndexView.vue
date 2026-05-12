<script setup lang="ts">
import {
  openDB,
  addData,
  getDataByKey,
  getAllDataByKey,
  getCursorData,
  getDataByIndex,
  cursorGetDataByIndex,
  cursorGetDataByIndexAndPage,
} from "./db";
import type { TRow } from "./types";

let dbVal: IDBDatabase;

onMounted(() => {
  openDB("test", 1)
    .then((db) => {
      dbVal = db;
      // console.log(db);
      // db.addData
      // const arr: any[] = [
      //   {
      //     name: "1",
      //     email: "1@qq.com",
      //   },
      //   {
      //     name: "2",
      //     email: "2@qq.com",
      //   },
      // ];

      // // addData(db, 'stu', {})
      // arr.forEach(item => {
      //   addData(db, "stu", item);
      // });
    })
    .catch((err) => {
      console.error(err);
    });
});

// 添加数据
const onAdd = () => {
  const arr = [
    // {
    //   name: "张三",
    //   email: "张三@qq.com",
    // },
    // {
    //   name: "李四",
    //   email: "李四@qq.com",
    // },
    // {
    //   name: "王五",
    //   email: "王五@qq.com",
    // },
    // {
    //   name: "老六",
    //   email: "老六@qq.com",
    // },
    // {
    //   name: "刘德华",
    //   email: "刘德华@qq.com",
    // },
    // {
    //   name: "张学友",
    //   email: "张学友@qq.com",
    // },
    // {
    //   name: "郭富城",
    //   email: "郭富城@qq.com",
    // },
    // {
    //   name: "黎明",
    //   email: "黎明@qq.com",
    // },
    // {
    //   name: "小刚刚",
    //   email: "小刚刚@qq.com",
    // },
    // {
    //   name: "小花",
    //   email: "小花@qq.com",
    // },
    // {
    //   name: "小花",
    //   email: "小花2@qq.com",
    // },
  ];

  arr.forEach((item) => {
    addData(dbVal!, "stu", item);
  });

  // addData(dbVal!, "stu", {
  //   name: "测试",
  //   email: "test@qq.com",
  // });
  // addData(dbVal!, "stu", {
  //   name: "3",
  //   email: "3@qq.com",
  // });
};

const getData = () => {
  getDataByKey(dbVal!, "stu", 3)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getDataAll = () => {
  getAllDataByKey(dbVal!, "stu")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getDataCursor = () => {
  getCursorData(dbVal!, "stu")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getDataIndex = () => {
  getDataByIndex(dbVal!, "stu", "name", "小花")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getDataIndexCursor = () => {
  cursorGetDataByIndex(dbVal!, "stu", "name", "小花")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

// 分页
const getCursorGetDataByIndexAndPage = () => {
  cursorGetDataByIndexAndPage(dbVal!, "stu", "name", "小花", 2, 5)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};
</script>

<template>
  <div>
    IndexedDB

    <el-button type="primary" @click="onAdd">增加数据</el-button>
    <el-button type="primary" @click="getData">查询 2</el-button>
    <el-button type="primary" @click="getDataAll">查询全部</el-button>
    <el-button type="primary" @click="getDataCursor">查询之通过游标实现</el-button>
    <el-button type="primary" @click="getDataIndex">查询之通过索引</el-button>
    <el-button type="primary" @click="getDataIndexCursor">查询之通过索引 + 游标</el-button>
    <el-button type="primary" @click="getCursorGetDataByIndexAndPage">分页</el-button>
  </div>
</template>

<style scoped></style>
