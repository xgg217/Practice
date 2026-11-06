<script setup lang="ts">
import { Map, View, MapBrowserEvent, Feature } from "ol";
import "ol/ol.css";
import { styleObj, layerObj, getControls } from "./utils";
import { CENTER, EXTENT } from "@/views/WebGIS/OpenLayers2/config";
import SeachCmp from "./components/SeachCmp.vue";

const map = ref<Map>();
const isDrawing = ref(false); // 是否在绘画
const nowCity = ref(""); // 当前选中的城市
const mapRef = useTemplateRef<InstanceType<typeof HTMLElement>>("mapRef");

/**
 * 单击 选中城市
 */
const handleClickFeature = (e: MapBrowserEvent) => {
  console.log(e);

  if (!map.value) {
    console.error("地图未加载");

    return;
  }

  // if (isDrawing) return;

  // const geometryFeature = map.forEachFeatureAtPixel(
  //   e.pixel,
  //   (feat) => {
  //     // 命中的要素
  //     return feat instanceof Feature ? feat : null;
  //   },
  //   {
  //     // 只检测指定图层
  //     layerFilter: (layer) => layer === layerObj.geometryLayer,
  //   },
  // );
  // console.log(geometryFeature);

  // if (geometryFeature && nowGeometry.value === "清除") {
  //   geometryLayer.getSource()?.removeFeature(geometryFeature);
  //   nowGeometry.value = "绘制";
  //   return;
  // }

  // 获取所有城市
  const cityFeatures = layerObj.cityLayer.getSource()?.getFeatures() || [];
  // 当前鼠标点击的位置
  const cityFeature = map.value.forEachFeatureAtPixel(
    e.pixel,
    (feat) => {
      return feat instanceof Feature ? feat : null;
    },
    // {
    //   // 指定图层
    //   layerFilter: (layer) => layer === layerObj.cityLayer,
    // },
  );
  console.log(cityFeature);

  if (cityFeature) {
    const props = cityFeature.getProperties();
    activeCityFeature(cityFeatures, cityFeature, props.name);
  }
};

/**
 * 设置当前选中的样式
 * @param features 所有城市
 * @param feature 当前城市
 * @param city 当前城市名称
 */
const activeCityFeature = (features: Feature[], feature: Feature, city: string) => {
  nowCity.value = city;
  // 1. 先将所有城市重置
  features.forEach((f) => {
    f.setStyle(styleObj.initCityVectorStyle);
  });

  // 2. 设置当前 选中的城市 的样式
  feature.setStyle(styleObj.activeCityVectorStyle);

  // 3. 切换到选中的城市
  const geometry = feature.getGeometry();
  if (geometry) {
    map.value!.getView().fit(geometry.getExtent(), {
      duration: 500,
    });
  }
};

onMounted(() => {
  const mapVal = new Map({
    target: mapRef.value!,
    layers: [
      layerObj.baseVecLayer,
      layerObj.tagCvaLayer,
      layerObj.cityLayer,
      layerObj.monitorLayer,
      layerObj.geometryLayer,
    ],
    view: new View({
      center: CENTER,
      extent: EXTENT,
      zoom: 2,
    }),
    controls: getControls(EXTENT),
  });

  // 在地图中单击
  mapVal.on("singleclick", handleClickFeature);

  map.value = mapVal;
});
</script>

<template>
  <div class="warpp">
    <div ref="mapRef" class="map"></div>
    <SeachCmp
      class="seach"
      :map="map"
      v-model:now-city="nowCity"
      v-model:is-drawing="isDrawing"
      :activeCityFeature="activeCityFeature"
    />
  </div>
</template>

<style scoped>
.warpp {
  position: relative;
  top: 0;
  left: 0;
}

.map {
  width: 100%;
  height: 100vh;
}

/* 顶部搜索 */
.seach {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, 50%);
}

/* 右下角鹰眼图 */
::v-deep(.ol-overviewmap) {
  left: auto;
  right: 0.5em;
  .ol-overviewmap-map {
    width: 300px;
    height: 300px;
  }
}
</style>
