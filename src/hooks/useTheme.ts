import { useThemeStore } from "@/stores/themeStore";
import { storeToRefs } from "pinia";

export const useTheme = () => {
  const darkStore = useThemeStore();
  const { isDark, mode } = storeToRefs(darkStore);

  let mediaQuery: MediaQueryList;

  const updateTheme = (matches: boolean) => {
    document.documentElement.classList.toggle("dark", matches);
    // isDark.value = matches;

    // console.log(matches);
    darkStore.setMode(matches ? "dark" : "light");
  };

  const handler = (e: MediaQueryListEvent) => updateTheme(e.matches);

  onMounted(() => {
    mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    // console.log(mediaQuery);
    updateTheme(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
  });

  onUnmounted(() => {
    mediaQuery?.removeEventListener("change", handler);
    // stopWatch?.();
  });

  return { isDark, mode, toggle: darkStore.toggle, setMode: darkStore.setMode, updateTheme };
};
