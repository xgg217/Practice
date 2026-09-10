<script setup lang="ts">
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { XYZ } from "ol/source";
import { fromLonLat, transformExtent } from "ol/proj";

const mapRef = useTemplateRef<InstanceType<typeof HTMLElement>>("mapRef");

const coordinate = fromLonLat([120.15, 30.29]); // 经纬度转墨卡托
const extent = transformExtent([117, 26, 124, 32], "EPSG:4326", "EPSG:3857");

onMounted(() => {
  new Map({
    target: mapRef.value!,
    layers: [
      new TileLayer({
        source: new XYZ({
          url:
            "http://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=" +
            import.meta.env.VITE_API_TIANDITU_MAP,
        }),
      }),
      new TileLayer({
        source: new XYZ({
          url:
            "http://t0.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=" +
            import.meta.env.VITE_API_TIANDITU_MAP,
        }),
      }),
    ],
    view: new View({
      // center: [0, 0],
      center: coordinate,
      zoom: 2,
      // projection: "EPSG:4326", // 使用wgs84坐标系
      extent,
    }),
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
