<script setup lang="ts">
import { useEditorStore } from "@/stores/wenjuan/useEditor";
import { Close } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";
import EventBus from "@/views/Custom/Wenjuan/EditorView/eventBus";

const editorStore = useEditorStore();

const boxsRef = useTemplateRef("boxsRef"); // 最外层元素
const componentsRefs = ref<(Element | ComponentPublicInstance | null)[]>([]); // 组件的dom元素

// 删除组件
const removeCom = (index: number) => {
  // editorStore.removeCom(index);
  ElMessageBox.confirm("确定删除该组件吗？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      editorStore.removeCom(index);
      editorStore.setCurrentComponentIndex(-1);
      ElMessage.success("删除成功");
    })
    .catch(() => {
      ElMessage.info("已取消删除");
    });
};

// 滚动到最底部
const scrollToBottom = () => {
  console.log(1);

  nextTick(() => {
    const container = boxsRef.value!; // 获取容器的dom元素

    if (container) {
      container.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  });
};

// 滚动到 指定到组件
// const scrollToCenter = (index: number) => {
//   nextTick(() => {
//     const element = componentsRefs.value[index]; // 获取当前题目的dom元素
//     // 判断当前元素是否是HTMLElement
//     if (element instanceof HTMLElement) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//       });
//     }
//   });
// };

// 监听事件总线 滚动到最底部
EventBus.on("scrollToBottom", scrollToBottom);
</script>

<template>
  <div class="boxs" ref="boxsRef">
    <div
      v-for="(item, index) in editorStore.getComsList"
      :key="item.id"
      class="box mb-10 relative"
      :class="{
        active: editorStore.currentComponentIndex === index,
      }"
      :ref="(el) => (componentsRefs[index] = el)"
    >
      <component :is="item.type" :status="item.status" :serialNum="item.index" />

      <!-- 删除按钮 -->
      <div class="absolute delete-btn" v-show="editorStore.currentComponentIndex === index">
        <el-button
          type="danger"
          class="ml-10"
          size="small"
          :icon="Close"
          circle
          @click.stop="removeCom(index)"
        />
      </div>
    </div>

    <!-- 当没有添加的时候展示的内容 -->
    <el-empty v-if="editorStore.getComsList.length === 0" description="请添加" />
  </div>
</template>

<style scoped>
.boxs {
  padding: 15px 30px 60px 15px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  background: var(--white);
  position: relative;
  /* border: 1px solid blue; */
  min-height: 99vh;
  box-sizing: border-box;
}

.box {
  cursor: pointer;
  padding: 10px;
  background-color: var(--white);
  border-radius: var(--border-radius-sm);
  /* border: 1px solid red; */

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01);
    transition: 0.5s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  &.active {
    transform: scale(1.01);
    transition: 0.5s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
}
</style>
