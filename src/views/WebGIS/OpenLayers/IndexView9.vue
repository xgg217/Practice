<script setup lang="ts">
import { Map, View } from "ol";
import { XYZ } from "ol/source";
import { Tile as TileLayer } from "ol/layer";

const mapRef = useTemplateRef<InstanceType<typeof HTMLElement>>("mapRef");

const view = new View();

const tileLayerSource = new XYZ({
  url:
    "http://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=" +
    import.meta.env.VITE_API_TIANDITU_MAP,
});

const tileLayer = new TileLayer();

onMounted(() => {
  const map = new Map({
    target: mapRef.value!,
    layers: [],
    view,
  });

  tileLayer.setSource(tileLayerSource);

  map.addLayer(tileLayer);

  view.setCenter([0, 0]);
  view.setZoom(4);

  // 单击 事件
  map.on("singleclick", (e) => {
    console.log(e);
    // 获取墨卡托坐标
    console.log(e.coordinate);
  });
});
</script>

<template>
  <div ref="mapRef" class="map"></div>
</template>

<style>
@import "node_modules/ol/ol.css";
</style>
<style scoped>
.map {
  width: 100%;
  height: 100vh;
}
</style>
