import { expect, test } from "vitest";

// test("测试加法", () => {
//   expect(sum(1, 2)).toBe(3);
//   expect(sum(1, 2)).not.toBe(4);
// });

// test("测试减法", () => {
//   return expect(sub(10, 5)).toBe(5);
// });

// test("测试乘法", () => {
//   return expect(mul(2, 3)).toBe(6);
// });

// test("测试除法", () => {
//   return expect(div(10, 2)).toBe(5);
// });

// test("深度比较对象", () => {
//   const stu = { name: "张三", score: { html: 100, css: 90 } };

//   expect(stu).not.toBe({ name: "张三", score: { html: 100, css: 90 } });

//   // 使用 toEqual 来进行深度比较
//   // toEqual 会递归比较对象的所有属性
//   expect(stu).toEqual({ name: "张三", score: { html: 100, css: 90 } });
// });

test("布尔值相关匹配器", () => {
  // const n = null;
  // expect(n).toBeFalsy();
  // expect(n).not.toBeTruthy();

  // const a = 0;
  // expect(a).toBeFalsy();
  // expect(a).not.toBeTruthy();

  // expect(1).toBeDefined();
  // expect(0.2 + 0.1).toBe(0.3); // 0.2 + 0.1 is 0.30000000000000004

  expect(0.3).toBeCloseTo(0.3);

  // expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
});
