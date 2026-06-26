import SingleSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/SingleSelect/config";
import MultiSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/MultiSelect/config";
import OptionSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/OptionSelect/config";
import SinglePicSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/SinglePicSelect/config";
import MultiPicSelect from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/MultiPicSelect/config";
import TextInputView from "@/views/Custom/Wenjuan/MaterialsView/InputGroupView/TextInputView/config";
import TextareaInput from "@/views/Custom/Wenjuan/MaterialsView/InputGroupView/TextareaInput/config";
import RateScore from "@/views/Custom/Wenjuan/MaterialsView/AdvancedGroupView/RateScore/config";
import DateTime from "@/views/Custom/Wenjuan/MaterialsView/AdvancedGroupView/DateTime/config";
import TextNote from "@/views/Custom/Wenjuan/MaterialsView/NoteGroupView/TextNote/config";

import { OPTIONS_STATUS_ENUM } from "@/views/Custom/Wenjuan/consts";
import type { ComponentMap } from "@/views/Custom/Wenjuan/types/store";

import TitleEditor from "@/views/Custom/Wenjuan/components/EditItems/TitleEditor.vue";
import DescEditor from "@/views/Custom/Wenjuan/components/EditItems/DescEditor.vue";
import PositionEditor from "@/views/Custom/Wenjuan/components/EditItems/PositionEditor.vue";
import SizeEditor from "@/views/Custom/Wenjuan/components/EditItems/SizeEditor.vue";
import WeightEditor from "@/views/Custom/Wenjuan/components/EditItems/WeightEditor.vue";
import ItalicEditor from "@/views/Custom/Wenjuan/components/EditItems/ItalicEditor.vue";
import PicOptionsEditor from "@/views/Custom/Wenjuan/components/EditItems/PicOptionsEditor.vue";
import DateTimeTypeEditor from "@/views/Custom/Wenjuan/components/EditItems/DateTimeTypeEditor.vue";
import TextTypeEditor from "@/views/Custom/Wenjuan/components/EditItems/TextTypeEditor.vue"; // 文本类型
import RateTextEditor from "@/views/Custom/Wenjuan/components/EditItems/RateTextEditor.vue";
import OptionsEditor from "@/views/Custom/Wenjuan/components/EditItems/OptionsEditor.vue";
import ColorEditor from "@/views/Custom/Wenjuan/components/EditItems/ColorEditor.vue";

// import {
//   // 业务组件
//   DateTime,
//   RateScore,
//   SingleSelect,
//   TextNote,
//   MultiPicSelect,
//   MultiSelect,
//   OptionSelect,
//   SinglePicSelect,
//   TextInputView,
//   TextareaInput,
//   // 编辑组件
//   TitleEditor,
//   DescEditor,
//   PositionEditor,
//   SizeEditor,
//   WeightEditor,
//   ItalicEditor,
//   ColorEditor,
//   DateTimeTypeEditor,
//   RateTextEditor,
//   TextTypeEditor,
//   PicOptionsEditor,
//   OptionsEditor,
// } from "@/views/Custom/Wenjuan/MaterialsView/config";

// 业务组件
export const BUSINESS_COM_MAP: ComponentMap = {
  "single-select": markRaw(SingleSelect), // 选择-单选题
  "multi-select": markRaw(MultiSelect), // 选择-多选题
  "option-select": markRaw(OptionSelect), // 选择-下拉选择
  "single-pic-select": markRaw(SinglePicSelect), // 选择-图片单选题
  "multi-pic-select": markRaw(MultiPicSelect), // 选择-图片多选题

  "text-input": markRaw(TextInputView), // 文本输入-单行文本
  "textarea-input": markRaw(TextareaInput), // 文本输入-多行文本

  "rate-score": markRaw(RateScore), // 高级题型-评分打分
  "date-time": markRaw(DateTime), // 高级题型-时间日期
  "text-note": markRaw(TextNote), // 备注说明-备注说明

  // 个人信息-性别(单选题)
  "personal-info-gender": () => {
    const defaultStatus = SingleSelect();
    defaultStatus.name = "personal-info-gender";
    // 个人信息-性别(单选题) 标题
    defaultStatus.status.title.status = "您的性别是？";
    // @ts-expect-error 个人信息-性别(单选题) 选项
    defaultStatus.status.options.status = OPTIONS_STATUS_ENUM["personal-info-gender"];

    return markRaw(defaultStatus);
  },

  // 个人信息-学历(单选题)
  "personal-info-education": () => {
    const defaultStatus = SingleSelect();
    defaultStatus.name = "personal-info-education";
    // 个人信息-性别(单选题) 标题
    defaultStatus.status.title.status = "到目前为止，您的最高学历是？";
    // @ts-expect-error 个人信息-性别(单选题) 选项
    defaultStatus.status.options.status = OPTIONS_STATUS_ENUM["personal-info-education"];

    return markRaw(defaultStatus);
  },

  // 联系方式
  phone: () => {
    const defaultStatus = TextInputView();
    defaultStatus.name = "phone";
    // 联系方式-手机号 标题
    defaultStatus.status.title.status = "您的手机号是？";
    return markRaw(defaultStatus);
  },
};

// 编辑组件
export const EDIT_COM_MAP: anyObj = {
  // 编辑组件
  "title-editor": markRaw(TitleEditor),
  "desc-editor": markRaw(DescEditor),
  "position-editor": markRaw(PositionEditor),
  "options-editor": markRaw(OptionsEditor),
  "size-editor": markRaw(SizeEditor),
  "weight-editor": markRaw(WeightEditor),
  "italic-editor": markRaw(ItalicEditor),
  // "text-input-type-editor": markRaw(TextInputTypeEditor),
  "text-type-editor": markRaw(TextTypeEditor),
  "color-editor": markRaw(ColorEditor),
  "pic-options-editor": markRaw(PicOptionsEditor),
  "date-time-type-editor": markRaw(DateTimeTypeEditor),
  "rate-text-editor": markRaw(RateTextEditor),
};

// 配置映射
export const COM_MAP: ComponentMap = {
  ...BUSINESS_COM_MAP,
  ...EDIT_COM_MAP,
};
