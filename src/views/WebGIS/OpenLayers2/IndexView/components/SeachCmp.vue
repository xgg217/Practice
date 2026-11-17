<script setup lang="ts">
import type { Options } from "ol/interaction/Draw";
import { Map, Feature } from "ol";
import { Draw } from "ol/interaction";
import { layerObj, getAllCityFeatures } from "./../utils";
import { Vector } from "ol/source";
import type { Geometry } from "ol/geom";
import { getArea } from "ol/sphere";
import { fromCircle } from "ol/geom/Polygon";
import { ZJS_CITYS } from "@/views/WebGIS/OpenLayers2/config";

const props = defineProps<{
  map?: Map;
  // 切换选中的城市
  activeCityFeature: (features: Feature[], feature: Feature, city: string) => void;
}>();

const activeIndex2 = ref("");
// 当前是否正在绘制
const isDrawing = defineModel<boolean>("isDrawing");
// 当前选中的城市
const nowCity = defineModel<string>("nowCity");

// 选择城市
const onCity = (name: string) => {
  nowCity.value = name;

  // 获取所有城市
  const cityFeatures = getAllCityFeatures();
  const cityFeature = cityFeatures.find((f) => f.get("name") === name);
  if (cityFeature) {
    // 切换
    props.activeCityFeature(cityFeatures, cityFeature, name);
  }
};

// 检测点

// 绘制图形
const { onChangeSelect, onDel } = (() => {
  let draw: Draw;
  // let isDrawing = false;
  isDrawing.value = false;

  const vectorSource = layerObj.geometryLayer.getSource() as Vector<Feature<Geometry>>;

  // 清空
  const onDel = () => {
    if (!props.map) {
      console.error("地图不存在");
      return;
    }

    vectorSource.clear();
  };

  const onChangeSelect = (val: Options["type"]) => {
    if (!props.map) {
      console.error("地图不存在");
      return;
    }

    if (draw) {
      // 先删除 上一次的交互
      props.map.removeInteraction(draw);
    }

    // 面 或 圆
    if (val === "Polygon" || val === "Circle") {
      // isDrawing = true;
      isDrawing.value = true;

      draw = new Draw({
        type: val,
        source: vectorSource,
      });

      props.map.addInteraction(draw);

      draw.on("drawend", (e) => {
        const feature = e.feature;
        const geom = feature.getGeometry();
        console.log(geom);

        if (!geom) {
          return;
        }

        let area = 0;

        if (geom.getType() === "Polygon") {
          // 多边形
          area = getArea(geom);
        } else if (geom.getType() === "Circle") {
          // @ts-expect-error 类型处理 圆
          const polygon = fromCircle(geom, 64); // 圆 转为多边形
          area = getArea(polygon);
        } else {
          console.error("错误");
          area = 0;
        }

        console.log(area);

        if (area) {
          feature.set("area", (area / 1000000).toFixed(2) + " km²"); // 转为平方公里
          props.map && props.map.removeInteraction(draw);
          setTimeout(() => {
            isDrawing.value = false;
          }, 500);
        }
      });
    }
  };

  return {
    onChangeSelect,
    onDel,
  };
})();
</script>

<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-sub-menu index="1" :teleported="false">
        <template #title>{{ nowCity || "选择城市" }}</template>
        <el-menu-item
          v-for="(item, index) of ZJS_CITYS"
          :index="`1-${index + 1}`"
          :key="item.name"
          @click="onCity(item.name)"
          >{{ item.name }}</el-menu-item
        >
      </el-sub-menu>

      <el-menu-item index="2" :teleported="false">检测点</el-menu-item>

      <el-sub-menu index="3" :teleported="false">
        <template #title>绘制图形</template>
        <el-menu-item index="3-1" @click="onChangeSelect('Polygon')">多边形</el-menu-item>
        <el-menu-item index="3-2" @click="onChangeSelect('Circle')">圆形</el-menu-item>
        <el-menu-item index="3-3" @click="onDel">清除</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style scoped></style>
