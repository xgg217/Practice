// 存储本地数据库
import type { ComponentStatus } from "@/stores/wenjuan/useEditor";

const dbName = "wenjuan"; // 数据库名称
const STORE_NAME = "tixing"; // 存储库名称

// 行数据
export type TRow = {
  title: string; // 标题
  count: number; // 数量
  createdAt: number; // 创建时间 时间戳
  updatedAt: number; // 更新时间 时间戳
  detail?: ComponentStatus[];
};

// 列表数据
export type TListTime = {
  id: number; // 主键
  title: string; // 标题
  count: number; // 数量
  createdAt: string; // 创建时间
  updatedAt: string; // 更新时间
};

// 详情存储
export class Db {
  db: IDBDatabase | null = null;

  constructor() {
    // 初始化数据库
    // this.init();
  }

  init() {
    // this.openDB();

    // 初始化数据库
    return openDB()
      .then((db: IDBDatabase | null) => {
        this.db = db;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // 根据id获取数据
  getDataById(id: number) {
    return new Promise((resolve, reject) => {
      if (!this.db) return reject(new Error("数据库未初始化"));
      const transaction = this.db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(id);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // 关闭数据库
  closeDB() {
    closeDB(this.db!);
    this.db = null;
  }

  // 添加数据
  addData(row: TRow) {
    console.log(this.db);

    const db = this.db;
    return new Promise((resolve, reject) => {
      if (!db) return reject(new Error("数据库未初始化"));
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.add(row);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  // 更新数据
  updateData(row: TRow) {
    return new Promise((resolve, reject) => {
      if (!this.db) return reject(new Error("数据库未初始化"));
      const transaction = this.db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(row);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
}

// 打开数据库
const openDB = (version = 1): Promise<IDBDatabase | null> => {
  return new Promise((resolve, reject) => {
    let db: IDBDatabase | null = null;

    // 打开数据库，若没有则会创建
    const request = indexedDB.open(dbName, version);

    // 数据库打开成功回调
    request.onsuccess = function (event) {
      db = (event.target as IDBOpenDBRequest).result; // 数据库对象
      // self.db = db;

      console.log("数据库打开成功");
      resolve(db);
    };

    // 数据库打开失败的回调
    request.onerror = function (event) {
      const err = (event.target as IDBOpenDBRequest).error; // 数据库对象
      console.log("数据库打开报错");
      reject(err);
    };

    // 数据库有更新时候的回调
    request.onupgradeneeded = function (event) {
      // 数据库创建或升级的时候会触发
      console.log("onupgradeneeded");
      db = (event.target as IDBOpenDBRequest).result; // 数据库对象
      resolve(db);
      // self.db = db;

      // 创建存储库
      const objectStore = db.createObjectStore(STORE_NAME, {
        keyPath: "id", // 这是主键
        autoIncrement: true, // 实现自增
      });

      // 创建索引，在后面查询数据的时候可以根据索引查
      objectStore.createIndex("title", "title", { unique: false });
      objectStore.createIndex("createdAt", "createdAt", { unique: false });
      objectStore.createIndex("updatedAt", "updatedAt", { unique: false });
    };
  });
};

// 关闭数据库
const closeDB = (db: IDBDatabase) => {
  if (db) {
    db.close();
  }
};

// 获取列表
export const getList = (db: IDBDatabase) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME]); // 事务
    const objectStore = transaction.objectStore(STORE_NAME); // 仓库对象
    const request = objectStore.getAll(); // 通过主键获取数据

    request.onerror = (event) => {
      console.log("事务失败");
      reject(event);
    };

    request.onsuccess = () => {
      // console.log("主键查询结果: ", request.result);
      resolve(request.result);
    };
  });
};
