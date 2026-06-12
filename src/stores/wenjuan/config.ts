import SingleSelect, {
  type TSingleSelectStatus,
} from "@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/SingleSelect/config";
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

// 配置映射
export const COM_MAP: ComponentMap = {
  "single-select": SingleSelect, // 选择-单选题
  "multi-select": MultiSelect, // 选择-多选题
  "option-select": OptionSelect, // 选择-下拉选择
  "single-pic-select": SinglePicSelect, // 选择-图片单选题
  "multi-pic-select": MultiPicSelect, // 选择-图片多选题

  "text-input": TextInputView, // 文本输入-单行文本
  "textarea-input": TextareaInput, // 文本输入-多行文本

  "rate-score": RateScore, // 高级题型-评分打分
  "date-time": DateTime, // 高级题型-时间日期
  "text-note": TextNote, // 备注说明-备注说明

  // 个人信息-性别(单选题)
  "personal-info-gender": () => {
    const defaultStatus = SingleSelect();
    defaultStatus.name = "personal-info-gender";
    // 个人信息-性别(单选题) 标题
    defaultStatus.status.title.status = "您的性别是？";
    // @ts-expect-error 个人信息-性别(单选题) 选项
    defaultStatus.status.options.status = OPTIONS_STATUS_ENUM["personal-info-gender"];

    return defaultStatus;
  },

  // 个人信息-学历(单选题)
  "personal-info-education": () => {
    const defaultStatus = SingleSelect();
    defaultStatus.name = "personal-info-education";
    // 个人信息-性别(单选题) 标题
    defaultStatus.status.title.status = "到目前为止，您的最高学历是？";
    // @ts-expect-error 个人信息-性别(单选题) 选项
    defaultStatus.status.options.status = OPTIONS_STATUS_ENUM["personal-info-education"];

    return defaultStatus;
  },

  // 联系方式
  phone: () => {
    const defaultStatus = TextInputView();
    defaultStatus.name = "phone";
    // 联系方式-手机号 标题
    defaultStatus.status.title.status = "您的手机号是？";
    return defaultStatus;
  },
};
