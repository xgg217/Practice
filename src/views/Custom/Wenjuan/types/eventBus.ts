export type Events = {
  // 文本类型
  "UPDATE:TYPE": { name: string; value: number };

  // 备注说明类型
  "UPDATE:COMMENT_TYPE": { name: string; value: number };

  // 更新标题
  "UPDATE:TITLE": { name: string; value: string };
  // 更新描述
  "UPDATE:DESC": { name: string; value: string };

  // 选项-添加
  "ADD:OPTION": { name: string };

  // 选项-删除
  "DELETE:OPTION": { name: string; value: number };

  // 选项-图片-删除选项
  "DELETE:OPTION:PIC": { name: string; value: number };

  // 选项-图片-添加选项
  "ADD:OPTION:PIC": { name: string };

  // 选项-图片-删除图片
  "DELETE:PIC:URL": { name: string; value: number }; // value 是索引

  // 选项-图片-更新图片链接
  "UPDATE:PIC:URL": { name: string; value: { link: string; index: number } }; // value 是索引

  // 选项-辅助文字-切换
  "UPDATE:OPTION:USE": { name: string; value: boolean };

  // 选项-辅助文字-修改
  "UPDATE:OPTION:USE:TEXT": { name: string; value: { link: string; index: number } };

  // 选项-日期时间类型
  "UPDATE:OPTION:DATE_TIME": { name: string; value: number };

  // 更新对齐方式
  "UPDATE:POSITION": { name: string; value: number }; // value 是索引

  // 标题字体大小
  "UPDATE:TITLE_SIZE": { name: string; value: number }; // value 是索引

  // 描述字体大小
  "UPDATE:DESC_SIZE": { name: string; value: number }; // value 是索引

  // 标题字体加粗
  "UPDATE:TITLE_WEIGHT": { name: string; value: number }; // value 是索引

  // 描述字体加粗
  "UPDATE:DESC_WEIGHT": { name: string; value: number }; // value 是索引

  // 标题字体斜体
  "UPDATE:TITLE_ITALIC": { name: string; value: number }; // value 是索引

  // 描述字体斜体
  "UPDATE:DESC_ITALIC": { name: string; value: number }; // value 是索引

  // 标题字体颜色
  "UPDATE:TITLE_COLOR": { name: string; value: string }; // value 颜色

  // 描述字体颜色
  "UPDATE:DESC_COLOR": { name: string; value: string }; // value 颜色
};
