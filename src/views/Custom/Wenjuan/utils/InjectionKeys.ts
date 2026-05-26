import type { PicLink } from "@/views/Custom/Wenjuan/types/editProps";

// 图片选择组件
export const GET_LINK = Symbol() as InjectionKey<(row: PicLink) => void>;
