import InputCmp from "./components/InputCmp.vue";
import SelectCmp from "./components/SelectCmp.vue";
import type { FieldSchema } from "./schema";
import type { VueComType } from "@/../types/index";

// 映射
export const componentsMap: Record<FieldSchema["component"], VueComType> = {
  Input: InputCmp,
  Select: SelectCmp,
};
