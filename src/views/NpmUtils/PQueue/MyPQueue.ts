type TOptions = {
  concurrency: number; // 并发数 默认为1
  timeout: number; // 默认无超时
  autoStart: boolean; // 默认 启动
  queueClass: () => void; // 默认使用默认队列
  intervalCap: number; // 在给定时间区间内，最多的跑数
  // interval
  // carryoverIntervalCount
};

export class MyPQueue {
  constructor(options: TOptions) {}
}
