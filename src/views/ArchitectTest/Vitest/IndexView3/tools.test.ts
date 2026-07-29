import { expect, test } from "vitest";

// test("布尔值相关匹配器", () => {
//   // const n = null;
//   // expect(n).toBeFalsy();
//   // expect(n).not.toBeTruthy();

//   // const a = 0;
//   // expect(a).toBeFalsy();
//   // expect(a).not.toBeTruthy();

//   // expect(1).toBeDefined();
//   // expect(0.2 + 0.1).toBe(0.3); // 0.2 + 0.1 is 0.30000000000000004

//   expect(0.3).toBeCloseTo(0.3);

//   // expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
// });

// const arr = ["张三"];
// test("上面的数组不包含某一项", () => {
//   expect(["李四", "王五", "赵六"]).toEqual(expect.not.arrayContaining(arr));
// });

test("expect.anything 用法", () => {
  expect(null).not.toEqual(expect.anything());
  expect(undefined).not.toEqual(expect.anything());
});
