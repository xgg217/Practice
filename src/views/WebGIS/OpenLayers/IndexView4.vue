<script setup lang="ts">
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { XYZ } from "ol/source";
import WebGLTileLayer from "ol/layer/WebGLTile";
import { GeoTIFF } from "ol/source";
import china from "./assets/china.tif?url";

const mapRef = useTemplateRef<InstanceType<typeof HTMLElement>>("mapRef");

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
      new WebGLTileLayer({
        source: new GeoTIFF({
          sources: [
            {
              url: china,
            },
          ],
        }),
      }),
    ],
    view: new View({
      center: [0, 0],
      // center: coordinate,
      zoom: 4,
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
