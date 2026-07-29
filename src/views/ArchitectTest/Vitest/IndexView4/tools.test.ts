import { expect, test, vi } from "vitest";

test("模拟函数", () => {
  // const mock = vi.fn();
  // mock.mockReturnValue(42);
  // expect(mock()).toBe(42);

  const mockFn = vi
    .fn()
    .mockReturnValue(30) // 设置返回值为 30
    .mockReturnValueOnce(10) // 第一次调用模拟函数对应的返回值
    .mockReturnValueOnce(20); // 第二次调用模拟函数对应的返回值

  expect(mockFn()).toBe(10);
  expect(mockFn()).toBe(20);
  expect(mockFn()).toBe(30);
  expect(mockFn()).toBe(30); // 之后都返回默认值
});
