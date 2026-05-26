// 图片组件传参
export interface ImgProps {
  index: number;
  url: string;
}

// 图片选择组件
export const GET_LINK = Symbol() as InjectionKey<(row: ImgProps) => void>;
