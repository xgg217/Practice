type TQueue = {
  task: () => Promise<any>;
  resolve: (value: unknown) => void;
  reject: (reason: unknown) => void;
};

// 任务队列
export class TaskLimit {
  private _limit: number; // 最大并发数
  private queue: TQueue[] = []; // 任务队列
  private _activeCount = 0; // 当前并发数

  constructor(limit: number) {
    this._limit = limit;
  }

  // 获取最大并发数
  get limit() {
    return this._limit;
  }

  // 获取当前并发数
  get activeCount() {
    return this._activeCount;
  }

  // 添加任务
  add(task: TQueue["task"]) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        task,
        resolve,
        reject,
      });

      // 尝试执行任务
      this.run();
    });
  }

  /**
   * 运行任务
   *    运行时机
   *       1. 队列为空
   *       2. 当前运行任务小于 并发数
   */
  private run() {
    while (this.activeCount < this._limit && this.queue.length) {
      const { task, resolve, reject } = this.queue.shift()!;
      this._activeCount++;
      task()
        .then(resolve, reject)
        .finally(() => {
          this._activeCount--;
          this.run();
        });
    }
  }
}
