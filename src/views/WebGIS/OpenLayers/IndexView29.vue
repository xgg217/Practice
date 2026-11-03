<script setup lang="ts">
import { Map, View } from "ol";
import { XYZ } from "ol/source";
import { Tile as TileLayer } from "ol/layer";
import "ol/ol.css";

const mapRef = useTemplateRef<InstanceType<typeof HTMLElement>>("mapRef");
let map: Map;
const mapClass = ref("");

// 矢量底图 vec_w
const baseVecLayer = new TileLayer({
  source: new XYZ({
    url:
      "https://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=" +
      import.meta.env.VITE_API_TIANDITU_MAP,
  }),
});

// 影像底图 img_w
const baseImgLayer = new TileLayer({
  source: new XYZ({
    url:
      "https://t0.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=" +
      import.meta.env.VITE_API_TIANDITU_MAP,
  }),
});

// 矢量标记 cva_w
const tagCvaLayer = new TileLayer({
  source: new XYZ({
    url:
      "https://t0.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=" +
      import.meta.env.VITE_API_TIANDITU_MAP,
  }),
});

// 影像标记 cia_w
const tagCiaLayer = new TileLayer({
  source: new XYZ({
    url:
      "https://t0.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=" +
      import.meta.env.VITE_API_TIANDITU_MAP,
  }),
});

const handleClick1 = () => {
  if (map) {
    // map.getLayers().setAt(0, baseVecLayer)
    // map.getLayers().setAt(1, tagCvaLayer)
    map.setLayers([baseVecLayer, tagCvaLayer]);
    mapClass.value = "";
  }
};

const handleClick2 = () => {
  if (map) {
    // map.getLayers().setAt(0, baseImgLayer)
    // map.getLayers().setAt(1, tagCiaLayer)
    map.setLayers([baseImgLayer, tagCiaLayer]);
    mapClass.value = "";
  }
};

const handleClick3 = () => {
  if (map) {
    // map.getLayers().setAt(0, baseVecLayer)
    // map.getLayers().setAt(1, tagCvaLayer)
    map.setLayers([baseVecLayer, tagCvaLayer]);
    mapClass.value = "nightLayer";
  }
};

onMounted(() => {
  map = new Map({
    target: mapRef.value!,
    layers: [baseVecLayer, tagCvaLayer],
    view: new View({
      center: [0, 0],
      // center: coordinate,
      zoom: 4,
    }),
  });
});
</script>

<template>
  <div class="warpp">
    <div ref="mapRef" class="map" :class="mapClass"></div>
    <div class="but">
      <el-button type="primary" @click="handleClick1">矢量地图</el-button>
      <el-button type="primary" @click="handleClick2">影像地图</el-button>
      <el-button type="primary" @click="handleClick3">极夜黑地图</el-button>
    </div>
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

.but {
  position: absolute;
  top: 50px;
  left: 50px;
}

.nightLayer {
  filter: grayscale(100%) invert(100%) sepia(15%) hue-rotate(180deg) saturate(1600%) brightness(70%)
    contrast(90%);
}
</style>
