import { defineStore } from "pinia";

export type TMode = "light" | "dark" | "auto";

export const useThemeStore = defineStore(
  "theme",
  () => {
    const mode = ref<TMode>("auto");

    // 当前是否是暗黑模式
    const systemDark = ref(window.matchMedia("(prefers-color-scheme: dark)").matches);

    const isDark = computed(() => {
      if (mode.value === "dark") return true;
      if (mode.value === "light") return false;
      return systemDark.value;
    });

    // 指定切换
    function setMode(newMode: TMode) {
      // console.log(newMode);

      mode.value = newMode;
    }

    // 切换
    function toggle() {
      setMode(isDark.value ? "light" : "dark");
    }

    function setSystemDark(value: boolean) {
      systemDark.value = value;
    }

    return {
      mode,
      systemDark,
      isDark,
      setMode,
      toggle,
      setSystemDark,
    };
  },

  {
    persist: {
      key: "theme",

      // 保证刷新后 systemDark 重新从 matchMedia 读取，不会读到过期值
      pick: ["mode"], // 只持久化 mode，systemDark 不落盘
    },
  },
);
