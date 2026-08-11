import { expect, test, beforeEach, afterEach, beforeAll, afterAll, describe } from "vitest";
import { sum, sub, mul, div } from "@/views/ArchitectTest/Vitest/tools";

beforeEach(() => {
  console.log("全局的beforeEach");
});

afterEach(() => {
  console.log("全局的afterEach");
});

beforeAll(() => {
  console.log("全局的beforeAll");
});

// afterAll 会在所有测试用例执行完成之后，然后再执行 afterAll
afterAll(() => {
  console.log("全局的afterAll");
});

test("测试加法函数", () => {
  const result = sum(1, 3);
  expect(result).toBe(4);
  console.log("\x1b[31m%s\x1b[0m", "测试加法函数");
});

test("测试减法函数", () => {
  const result = sub(15, 10);
  expect(result).toBe(5);
  console.log("\x1b[31m%s\x1b[0m", "测试减法函数");
});

describe("第二组", () => {
  beforeEach(() => {
    console.log("\x1b[34m%s\x1b[0m", "分组beforeEach");
  });
  afterEach(() => {
    console.log("\x1b[34m%s\x1b[0m", "分组afterEach");
  });

  beforeAll(() => {
    console.log("\x1b[32m%s\x1b[0m", "分组beforeAll");
  });
  afterAll(() => {
    console.log("\x1b[32m%s\x1b[0m", "分组afterAll");
  });

  test("测试乘法函数", () => {
    const result = mul(2, 3);
    expect(result).toBe(6);
    console.log("\x1b[31m%s\x1b[0m", "测试乘法函数");
  });

  test("测试除法函数", () => {
    const result = div(50, 2);
    expect(result).toBe(25);
    console.log("\x1b[31m%s\x1b[0m", "测试除法函数");
  });
});
