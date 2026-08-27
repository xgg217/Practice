import { expect, test, describe } from "vitest";
import { get, set, KEY } from "@/utils/storage";

const keyName = "模拟浏览器存储1";

const name = KEY + keyName;

describe("测试 storage 存储", () => {
  test("测试存储", () => {
    const val = "123";

    set(keyName, val);

    expect(localStorage.getItem(name)).toBe(val);
  });

  test("测试获取", () => {
    const val = "456";

    localStorage.setItem(name, val);
    expect(get(name)).toBe(val);
  });
});
