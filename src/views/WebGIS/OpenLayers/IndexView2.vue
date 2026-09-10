<script setup lang="ts">
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { OSM } from "ol/source";

const mapRef = useTemplateRef<InstanceType<typeof HTMLElement>>("mapRef");

onMounted(() => {
  new Map({
    target: mapRef.value!,
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });
});
</script>

<template>
  需要科学上网才能显示地图
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
