import type { TRow } from "./types";

/**
 * 打开数据库
 * @param {string} dbName  数据库名称
 * @param {number} version  版本号 默认1
 */
export const openDB = (dbName: string, version: number = 1): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    let db: IDBDatabase; // 数据库对象

    // 打开数据库，若没有则会创建
    const request = indexedDB.open(dbName, version);

    // 数据库打开成功回调
    request.onsuccess = function (event) {
      db = (event.target as IDBOpenDBRequest).result; // 数据库对象
      console.log("数据库打开成功");
      resolve(db);
    };
    // 数据库打开失败的回调
    request.onerror = function (event) {
      console.log("数据库打开报错");
      reject(event);
    };

    // 数据库有更新时候的回调
    request.onupgradeneeded = function (event) {
      // 数据库创建或升级的时候会触发
      // console.log("onupgradeneeded");
      db = (event.target as IDBOpenDBRequest).result; // 数据库对象

      // 创建存储库
      const objectStore = db.createObjectStore("stu", {
        keyPath: "id", // 这是主键
        autoIncrement: true, // 实现自增
      });

      // 创建索引，在后面查询数据的时候可以根据索引查
      objectStore.createIndex("id", "id", { unique: true });
      objectStore.createIndex("name", "name", { unique: false });
      objectStore.createIndex("email", "email", {
        unique: true,
      });
    };
  });
};

/**
 * 关闭数据库
 * @param {IDBDatabase} db 数据库实例
 */
function closeDB(db: IDBDatabase) {
  db.close();
  console.log("数据库已关闭");
}

/**
 * 删除数据库
 * @param {string} dbName 数据库名称
 */
function deleteDBAll(dbName: string) {
  console.log(dbName);
  const deleteRequest = window.indexedDB.deleteDatabase(dbName);

  deleteRequest.onerror = function (event) {
    console.log("删除失败");
  };
  deleteRequest.onsuccess = function (event) {
    console.log("删除成功");
  };
}

/**
 * 新增数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {TRow} data 数据
 */
export function addData(db: IDBDatabase, storeName: string, data: {}) {
  const request = db
    .transaction([storeName], "readwrite") // 事务对象 指定表格名称和操作模式（"只读"或"读写"）
    .objectStore(storeName) // 打开仓库对象
    .add(data);

  request.onsuccess = function (event) {
    console.log("数据写入成功");
  };

  request.onerror = function (event) {
    console.log("数据写入失败");
  };
}

/**
 * 通过主键读取数据
 * @param {IDBDatabase} db 数据库实例
 * @param {string} storeName 表名称
 * @param {number} key 主键值
 */
export function getDataByKey(db: IDBDatabase, storeName: string, key: number) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName]); // 事务
    const objectStore = transaction.objectStore(storeName); // 仓库对象
    const request = objectStore.get(key); // 通过主键获取数据

    request.onerror = (event) => {
      console.log("事务失败");
      reject(event);
    };

    request.onsuccess = () => {
      console.log("主键查询结果: ", request.result);
      resolve(request.result);
    };
  });
}

/**
 * 获取全部
 * @param {IDBDatabase} db 数据库实例
 * @param {string} storeName 表名称
 */
export function getAllDataByKey(db: IDBDatabase, storeName: string) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName]); // 事务
    const objectStore = transaction.objectStore(storeName); // 仓库对象
    const request = objectStore.getAll(); // 通过主键获取数据

    request.onerror = (event) => {
      console.log("事务失败");
      reject(event);
    };

    request.onsuccess = () => {
      console.log("主键查询结果: ", request.result);
      resolve(request.result);
    };
  });
}

/**
 * 通过指针来查询所有数据
 * @param {IDBDatabase} db 数据库实例
 * @param {string} storeName 表名称
 */
export function getCursorData(db: IDBDatabase, storeName: string) {
  return new Promise((resolve, reject) => {
    const data: TRow[] = [];

    const transaction = db.transaction([storeName]); // 事务
    const objectStore = transaction.objectStore(storeName); // 仓库对象
    const cursorRequest = objectStore.openCursor(); // 打开指针

    cursorRequest.onerror = (event) => {
      console.log("事务失败");
      reject(event);
    };

    cursorRequest.onsuccess = (event) => {
      // console.log("主键查询结果: ", request.result);
      // @ts-ignore
      const cursor = event.target.result;

      if (cursor) {
        data.push(cursor.value);

        // 继续游标
        cursor.continue();
      } else {
        resolve(data);
      }
    };
  });
}

/**
 * 通过索引读取数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 */
export function getDataByIndex(
  db: IDBDatabase,
  storeName: string,
  indexName: string,
  indexValue: string,
) {
  return new Promise((resolve, reject) => {
    const store = db.transaction(storeName, "readwrite").objectStore(storeName);
    const request = store.index(indexName).get(indexValue);

    request.onerror = function (e) {
      console.log("事务失败");
      reject(e);
    };
    request.onsuccess = function (e) {
      // @ts-ignore
      const result = e.target.result;
      console.log("索引查询结果：", result);
      resolve(result);
    };
  });
}

/**
 * 通过索引和游标查询记录
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 */
export function cursorGetDataByIndex(
  db: IDBDatabase,
  storeName: string,
  indexName: string,
  indexValue: string,
) {
  return new Promise((resolve, reject) => {
    const list: any[] = [];
    const store = db.transaction(storeName, "readwrite").objectStore(storeName); // 仓库对象
    const request = store
      .index(indexName) // 索引对象
      .openCursor(IDBKeyRange.only(indexValue)); // 指针对象

    request.onsuccess = function (e) {
      // @ts-ignore
      const cursor = e.target.result;
      if (cursor) {
        // 必须要检查
        list.push(cursor.value);
        cursor.continue(); // 遍历了存储对象中的所有内容
      } else {
        console.log("游标索引查询结果：", list);
        resolve(list);
      }
    };
    request.onerror = function (e) {
      reject(e);
    };
  });
}

/**
 * 通过索引和游标分页查询记录
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 * @param {number} page 页码
 * @param {number} pageSize 查询条数
 */
export function cursorGetDataByIndexAndPage(
  db: IDBDatabase,
  storeName: string,
  indexName: string,
  indexValue: string,
  page: number,
  pageSize: number,
) {
  return new Promise((res, rej) => {
    const list: any[] = []; // 存储当前页分页数据
    let counter = 0; // 计数器
    let isPass = true; // 是否跳过多少条查询
    // var store = db.transaction(storeName, "readwrite").objectStore(storeName); // 仓库对象
    const request = db.transaction(storeName, "readwrite").objectStore(storeName).openCursor(); // 创建一个指针对象（目前是指向第一条数据）

    request.onsuccess = function (e) {
      // @ts-ignore
      let cursor = e.target.result;

      // 是否要跳过一些数据
      if (page > 1 && isPass) {
        isPass = false;
        cursor.advance((page - 1) * pageSize); // 跳过多少条
        return;
      }

      if (cursor) {
        // 必须要检查
        list.push(cursor.value);
        counter++;

        // 当前页数据还没有结束
        if (counter < pageSize) {
          cursor.continue(); // 遍历了存储对象中的所有内容
        } else {
          cursor = null; // 遍历结束
          console.log("分页查询结果", list);
          res(list);
        }
      } else {
        console.log("分页查询结果", list);
        res(list);
      }
    };
    request.onerror = function (e) {
      rej(e);
    };
  });
}
