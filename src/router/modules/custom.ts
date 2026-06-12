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
      redirect: {
        name: "suvey-type",
      },

      children: [
        {
          path: "suvey-type",
          name: "suvey-type",
          component: () =>
            import("@/views/Custom/Wenjuan/EditorView/components/LeftCmp/SuveyTypeView/IndexView.vue"),
          meta: {
            title: "题型",
          },
        },
        {
          path: "outline",
          name: "outline",
          component: () =>
            import("@/views/Custom/Wenjuan/EditorView/components/LeftCmp/OutlineView.vue"),
          meta: {
            title: "大纲",
          },
        },
      ],
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
            title: "选择",
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
            title: "文本输入",
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
                import("@/views/Custom/Wenjuan/MaterialsView/InputGroupView/TextInputView/IndexView.vue"),
              meta: {
                title: "单行文本",
              },
            },
            {
              path: "textarea-input",
              name: "textarea-input",
              component: () =>
                import("@/views/Custom/Wenjuan/MaterialsView/InputGroupView/TextareaInput/IndexView.vue"),
              meta: {
                title: "多行文本输入",
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
            title: "高级题型",
            imgSrc: "",
            isShow: false, // 不显示
          },
          redirect: {
            name: "rate-score",
          },
          children: [
            {
              path: "rate-score",
              name: "rate-score",
              component: () =>
                import("@/views/Custom/Wenjuan/MaterialsView/AdvancedGroupView/RateScore/IndexView.vue"),
              meta: {
                title: "评分/打分",
              },
            },
            {
              path: "date-time",
              name: "date-time",
              component: () =>
                import("@/views/Custom/Wenjuan/MaterialsView/AdvancedGroupView/DateTime/IndexView.vue"),
              meta: {
                title: "日期/时间",
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
            title: "备注说明",
            imgSrc: "",
            isShow: false, // 不显示
          },

          redirect: {
            name: "text-note",
          },
          children: [
            {
              path: "text-note",
              name: "text-note",
              component: () =>
                import("@/views/Custom/Wenjuan/MaterialsView/NoteGroupView/TextNote/IndexView.vue"),
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
            title: "个人信息",
            imgSrc: "",
            isShow: false, // 不显示
          },
          redirect: {
            name: "personal-info-gender",
          },
          children: [
            // {
            //   path: "personal-info-name",
            //   name: "personal-info-name",
            //   component: () => import("@/components/SurveyComs/Materials/InputComs/TextInput.vue"),
            //   meta: {
            //     title: "姓名",
            //   },
            // },
            // {
            //   path: "/personal-info-id",
            //   name: "personal-info-id",
            //   component: () => import("@/components/SurveyComs/Materials/InputComs/TextInput.vue"),
            //   meta: {
            //     title: "身份证号",
            //   },
            // },
            // {
            //   path: "/personal-info-birth",
            //   name: "personal-info-birth",
            //   component: () =>
            //     import("@/components/SurveyComs/Materials/AdvancedComs/DateTime.vue"),
            //   meta: {
            //     title: "出生日期",
            //   },
            // },
            {
              path: "personal-info-gender",
              name: "personal-info-gender",
              component: () =>
                import("@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/SingleSelect/IndexView.vue"),
              meta: {
                title: "性别",
              },
            },
            // {
            //   path: "/personal-info-age",
            //   name: "personal-info-age",
            //   component: () =>
            //     import("@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue"),
            //   meta: {
            //     title: "年龄",
            //   },
            // },
            {
              path: "personal-info-education",
              name: "personal-info-education",
              component: () =>
                import("@/views/Custom/Wenjuan/MaterialsView/SelectGroupView/SingleSelect/IndexView.vue"),
              meta: {
                title: "学历",
              },
            },
            // {
            //   path: "/personal-info-collage",
            //   name: "personal-info-collage",
            //   component: () => import("@/components/SurveyComs/Materials/InputComs/TextInput.vue"),
            //   meta: {
            //     title: "大学",
            //   },
            // },
            // {
            //   path: "/personal-info-major",
            //   name: "personal-info-major",
            //   component: () => import("@/components/SurveyComs/Materials/InputComs/TextInput.vue"),
            //   meta: {
            //     title: "专业",
            //   },
            // },
            // {
            //   path: "/personal-info-industry",
            //   name: "personal-info-industry",
            //   component: () => import("@/components/SurveyComs/Materials/InputComs/TextInput.vue"),
            //   meta: {
            //     title: "行业",
            //   },
            // },
            // {
            //   path: "/personal-info-career",
            //   name: "personal-info-career",
            //   component: () =>
            //     import("@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue"),
            //   meta: {
            //     title: "职业",
            //   },
            // },
            // {
            //   path: "/personal-info-company",
            //   name: "personal-info-company",
            //   component: () => import("@/components/SurveyComs/Materials/InputComs/TextInput.vue"),
            //   meta: {
            //     title: "公司",
            //   },
            // },
            // {
            //   path: "/personal-info-position",
            //   name: "personal-info-position",
            //   component: () => import("@/components/SurveyComs/Materials/InputComs/TextInput.vue"),
            //   meta: {
            //     title: "职位",
            //   },
            // },
            // {
            //   path: "personal-info-gender",
            //   name: "personal-info-gender",
            //   component: () =>
            //     import("@/views/Custom/Wenjuan/MaterialsView/PersonalInfoGroupView/PersonalInfoGenderView.vue"),
            //   meta: {
            //     title: "性别",
            //   },
            // },
            // {
            //   path: "personal-info-education",
            //   name: "personal-info-education",
            //   component: () =>
            //     import("@/views/Custom/Wenjuan/MaterialsView/PersonalInfoGroupView/PersonalInfoEducationView.vue"),
            //   meta: {
            //     title: "学历",
            //   },
            // },
          ],
        },
        {
          path: "contact-group",
          name: "contact-group",
          component: () =>
            import("@/views/Custom/Wenjuan/MaterialsView/ContactGroupView/IndexView.vue"),
          meta: {
            title: "联系方式",
            imgSrc: "",
            isShow: false, // 不显示
          },
          redirect: {
            name: "phone",
          },
          children: [
            {
              path: "phone",
              name: "phone",
              component: () =>
                import("@/views/Custom/Wenjuan/MaterialsView/InputGroupView/TextInputView/IndexView.vue"),
              meta: {
                title: "手机号",
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
