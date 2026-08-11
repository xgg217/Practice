import { expect, test, vi, describe } from "vitest";
import { sum } from "@/views/ArchitectTest/Vitest/tools";

describe.only("独占分组", () => {
  test("测试加法函数", () => {
    // 创建一个模拟函数
    const mock = vi.fn();

    // 设置这个模拟函数的返回值为 42
    mock.mockReturnValue(42);

    expect(mock()).toBe(42);
  });

  test("模拟函数-带实现的模拟函数", () => {
    const add = vi.fn((a, b) => a + b);
    expect(add(1, 2)).toBe(3);
  });

  test("从现有函数创建模拟函数", () => {
    const mockSum = vi.fn(sum);
    mockSum(1, 2); // 内部执行真实的 sum 逻辑

    expect(mockSum).toHaveBeenCalledWith(1, 2);
    expect(mockSum(3, 4)).toBe(7); // 仍然返回真实计算结果
  });
});
