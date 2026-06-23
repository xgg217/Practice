// 存储本地数据库

export class Db {
  db: IDBDatabase | null = null;
  dbName = "wenjuan";

  constructor() {
    // 初始化数据库
    this.init();
  }

  init() {
    this.openDB();
  }

  // 打开数据库
  openDB(version = 1) {
    const self = this;
    return new Promise((resolve, reject) => {
      let db: IDBDatabase | null = null;

      // 打开数据库，若没有则会创建
      const request = indexedDB.open(self.dbName, version);

      // 数据库打开成功回调
      request.onsuccess = function (event) {
        db = (event.target as IDBOpenDBRequest).result; // 数据库对象
        self.db = db;

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
        console.log(event.target);

        // 数据库创建或升级的时候会触发
        console.log("onupgradeneeded");
        db = (event.target as IDBOpenDBRequest).result; // 数据库对象
        self.db = db;

        // 创建存储库
        // a
        // 创建索引，在后面查询数据的时候可以根据索引查
        // objectStore.createIndex("link", "link", { unique: false });
        // objectStore.createIndex("sequenceId", "sequenceId", { unique: false });
        // objectStore.createIndex("messageType", "messageType", {
        //   unique: false,
        // });
      };
    });
  }

  // 关闭数据库
  closeDB() {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }

  // 添加数据
  addData() {}
}
