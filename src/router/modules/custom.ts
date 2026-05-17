import type { RouteRecordRaw } from "vue-router";

const ROW: RouteRecordRaw = {
  path: "Custom",
  meta: {
    title: "自定义项目",
  },
  children: [
    {
      path: "CustomView",
      name: "CustomView",
      component: () => import("@/views/Custom/IndexView.vue"),
      meta: {
        title: "首页",
      },
    },

    {
      path: "DutyStatistics",
      name: "CustomDutyStatistics",
      component: () => import("@/views/Custom/DutyStatistics/IndexView.vue"),
      meta: {
        title: "上班统计",
      },
    },
    {
      path: "ScanTheCode",
      name: "CustomScanTheCode",
      component: () => import("@/views/Custom/ScanTheCode/IndexView.vue"),
      meta: {
        title: "仿微信扫一扫",
      },
    },

    {
      path: "index2",
      name: "CustomIndex2",
      component: () => import("@/views/Custom/index2/IndexView.vue"),
      meta: {
        title: "点击外部关闭弹出框",
        imgSrc: "",
      },
    },

    // #region 问卷调查
    {
      path: "Wenjuan",
      name: "Wenjuan",
      component: () => import("@/views/Custom/Wenjuan/IndexView.vue"),
      meta: {
        title: "问卷调查",
        imgSrc: "",
      },
    },
    {
      path: "WenjuanEditorView",
      name: "WenjuanEditorView",
      component: () => import("@/views/Custom/Wenjuan/EditorView/IndexView.vue"),
      meta: {
        title: "问卷调查之编辑器",
        imgSrc: "",
        isShow: false, // 不显示
      },
    },
    {
      path: "WenjuanMaterials",
      name: "WenjuanMaterials",
      component: () => import("@/views/Custom/Wenjuan/MaterialsView/IndexView.vue"),
      meta: {
        title: "问卷调查之组件市场",
        imgSrc: "",
        isShow: false, // 不显示
      },
      redirect: {
        name: "select-group",
      },
      children: [
        {
          path: "select-group",
          name: "select-group",
          component: () =>
            import("@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/IndexView.vue"),
          redirect: {
            name: "single-select",
          },
          meta: {
            title: "问卷调查之选择",
            imgSrc: "",
            isShow: false, // 不显示
          },
          children: [
            {
              path: "single-select",
              name: "single-select",
              component: () =>
                import("@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/SingleSelect/IndexView.vue"),
              meta: {
                title: "单选",
              },
            },
            {
              path: "multi-select",
              name: "multi-select",
              component: () =>
                import("@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/MultiSelect/IndexView.vue"),
              meta: {
                title: "多选",
              },
            },
            {
              path: "option-select",
              name: "option-select",
              component: () =>
                import("@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/OptionSelect/IndexView.vue"),
              meta: {
                title: "下拉选择",
              },
            },
            {
              path: "single-pic-select",
              name: "single-pic-select",
              component: () =>
                import("@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/SinglePicSelect/IndexView.vue"),
              meta: {
                title: "图片单选题",
              },
            },
            {
              path: "multi-pic-select",
              name: "multi-pic-select",
              component: () =>
                import("@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/MultiPicSelect/IndexView.vue"),
              meta: {
                title: "图片多选题",
              },
            },
          ],
        },
        {
          path: "input-group",
          name: "input-group",
          component: () =>
            import("@/views/Custom/Wenjuan/MaterialsView/InputGroupView/IndexView.vue"),
          meta: {
            title: "问卷调查之文本输入",
            imgSrc: "",
            isShow: false, // 不显示
          },
          redirect: {
            name: "text-input",
          },
          children: [
            {
              path: "text-input",
              name: "text-input",
              component: () =>
                import("@/views/Custom/Wenjuan/MaterialsView/InputGroupView/TextInputView.vue"),
              meta: {
                title: "文本输入",
              },
            },
          ],
        },
        {
          path: "advanced-group",
          name: "advanced-group",
          component: () =>
            import("@/views/Custom/Wenjuan/MaterialsView/AdvancedGroupView/IndexView.vue"),
          meta: {
            title: "问卷调查之高级题型",
            imgSrc: "",
            isShow: false, // 不显示
          },
          redirect: {
            name: "advanced",
          },
          children: [
            {
              path: "advanced",
              name: "advanced",
              component: () =>
                import("@/views/Custom/Wenjuan/MaterialsView/AdvancedGroupView/AdvancedView.vue"),
              meta: {
                title: "备注说明",
              },
            },
          ],
        },
        {
          path: "note-group",
          name: "note-group",
          component: () =>
            import("@/views/Custom/Wenjuan/MaterialsView/NoteGroupView/IndexView.vue"),
          meta: {
            title: "问卷调查之备注说明",
            imgSrc: "",
            isShow: false, // 不显示
          },

          redirect: {
            name: "note",
          },
          children: [
            {
              path: "note",
              name: "note",
              component: () =>
                import("@/views/Custom/Wenjuan/MaterialsView/NoteGroupView/NoteView.vue"),
              meta: {
                title: "备注说明",
              },
            },
          ],
        },
        {
          path: "personal-info-group",
          name: "personal-info-group",
          component: () =>
            import("@/views/Custom/Wenjuan/MaterialsView/PersonalInfoGroupView/IndexView.vue"),
          meta: {
            title: "问卷调查之个人信息",
            imgSrc: "",
            isShow: false, // 不显示
          },
          redirect: {
            name: "personal-info-gender",
          },
          children: [
            {
              path: "personal-info-gender",
              name: "personal-info-gender",
              component: () =>
                import("@/views/Custom/Wenjuan/MaterialsView/PersonalInfoGroupView/PersonalInfoGenderView.vue"),
              meta: {
                title: "性别",
              },
            },
            {
              path: "personal-info-education",
              name: "personal-info-education",
              component: () =>
                import("@/views/Custom/Wenjuan/MaterialsView/PersonalInfoGroupView/PersonalInfoEducationView.vue"),
              meta: {
                title: "学历",
              },
            },
          ],
        },
        {
          path: "contact-group",
          name: "contact-group",
          component: () =>
            import("@/views/Custom/Wenjuan/MaterialsView/ContactGroupView/IndexView.vue"),
          meta: {
            title: "问卷调查之联系方式",
            imgSrc: "",
            isShow: false, // 不显示
          },
          redirect: {
            name: "contact",
          },
          children: [
            {
              path: "contact",
              name: "contact",
              component: () =>
                import("@/views/Custom/Wenjuan/MaterialsView/ContactGroupView/ContactView.vue"),
              meta: {
                title: "备注说明",
              },
            },
          ],
        },
      ],
    },
    // #endregion 问卷调查

    {
      path: "Watermark",
      name: "Watermark",
      component: () => import("@/views/Custom/Watermark/IndexView.vue"),
      meta: {
        title: "全局水印 + 局部水印",
        imgSrc: "",
      },
    },
    {
      path: "FullScreen",
      name: "FullScreen",
      component: () => import("@/views/Custom/FullScreen/IndexView.vue"),
      meta: {
        title: "全屏",
        imgSrc: "",
      },
    },

    {
      path: "FullScreen",
      name: "FullScreen",
      component: () => import("@/views/Custom/FullScreen/IndexView.vue"),
      meta: {
        title: "文件下载",
        imgSrc: "",
      },
    },
  ],
};

export default ROW;
