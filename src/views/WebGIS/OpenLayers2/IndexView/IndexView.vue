<script setup lang="ts">
import { Map, View, MapBrowserEvent, Feature } from "ol";
import "ol/ol.css";
import { layerObj, getControls, center, extent } from "./utils";

let map: Map;
let isDrawing = false; // 是否在绘画
const mapRef = useTemplateRef<InstanceType<typeof HTMLElement>>("mapRef");

// 单击
const handleClickFeature = (e: MapBrowserEvent) => {
  if (isDrawing) return;

  const geometryFeature = map.forEachFeatureAtPixel(
    e.pixel,
    (feat) => {
      // 命中的要素
      return feat instanceof Feature ? feat : null;
    },
    {
      // 只检测指定图层
      layerFilter: (layer) => layer === layerObj.geometryLayer,
    },
  );

  // if (geometryFeature && nowGeometry.value === "清除") {
  //   geometryLayer.getSource()?.removeFeature(geometryFeature);
  //   nowGeometry.value = "绘制";
  //   return;
  // }
};

onMounted(() => {
  map = new Map({
    target: mapRef.value!,
    layers: [
      layerObj.baseVecLayer,
      layerObj.tagCvaLayer,
      layerObj.cityLayer,
      layerObj.monitorLayer,
      layerObj.geometryLayer,
    ],
    view: new View({
      center,
      extent,
      zoom: 2,
    }),
    controls: getControls(extent),
  });

  // 在地图中单击
  map.on("singleclick", handleClickFeature);
});
</script>

<template>
  <div class="warpp">
    <div ref="mapRef" class="map"></div>
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

::v-deep(.ol-overviewmap) {
  left: auto;
  right: 0.5em;
  .ol-overviewmap-map {
    width: 300px;
    height: 300px;
  }
}
</style>
