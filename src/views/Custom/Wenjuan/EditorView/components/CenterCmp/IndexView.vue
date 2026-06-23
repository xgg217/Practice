<script setup lang="ts">
import { useEditorStore } from "@/stores/wenjuan/useEditor";
import CardCmp from "./components/CardCmp.vue";
import { ElMessage, ElMessageBox } from "element-plus";
import EventBus from "@/views/Custom/Wenjuan/EditorView/eventBus";
import { VueDraggableNext as Draggable } from "vue-draggable-next";

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

// 点击组件
const clickHandle = (index: number) => {
  // 点击当前组件，取消激活
  if (editorStore.currentComponentIndex === index) {
    editorStore.setCurrentComponentIndex(-1);
  } else {
    editorStore.setCurrentComponentIndex(index);
    scrollToCenter(index);
  }
};

// 将滚动条滚动到最底部，用于显示最新的组件
const scrollToBottom = () => {
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
const scrollToCenter = (index: number) => {
  console.log(1);
  nextTick(() => {
    const element = componentsRefs.value[index]; // 获取当前题目的dom元素
    // 判断当前元素是否是HTMLElement
    if (element instanceof HTMLElement) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  });
};

const dragstart = () => {
  editorStore.setCurrentComponentIndex(-1);
  // console.log(2);
};

// 监听事件总线 滚动到最底部
EventBus.on("scrollToBottom", scrollToBottom);
</script>

<template>
  <div class="boxs" ref="boxsRef">
    <el-empty v-if="editorStore.coms.length === 0" description="请添加" />

    <draggable
      v-else
      v-model="editorStore.coms"
      class="drag-container"
      item-key="id"
      @start="dragstart"
    >
      <CardCmp
        v-for="(item, index) in editorStore.getAllComsList"
        :key="item.id"
        :isActive="editorStore.currentComponentIndex === index"
        :row="item"
        :ref="(el) => (componentsRefs[index] = el)"
        @click="clickHandle(index)"
        @del="removeCom(index)"
      />
    </draggable>
  </div>
</template>

<style scoped>
.boxs {
  padding: 15px 30px 60px 15px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  background: var(--white);
  position: relative;
  border: 1px solid blue;
  min-height: 99vh;
  box-sizing: border-box;
}

.drag-item {
  padding: 10px;
  margin: 5px 0;
  background: #f0f0f0;
  cursor: move; /* 鼠标悬停时显示可移动图标 */
}
</style>
