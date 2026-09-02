// 全局要用的一些类型
// 注意没有全局导入，想要使用需要手动引入
import { defineComponent } from "vue";

export type ICardItem = {
  title: string; // 名称
  name: string; // 路由名称 便于查看路由是否存在
  remark: string; // 备注
  path: string; // 路由链接
  imgSrc?: string; // 图片
};

// 导出 vue 组件类型
export type VueComType = ReturnType<typeof defineComponent>;
