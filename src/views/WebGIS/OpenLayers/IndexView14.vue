<script setup lang="ts">
import { Map, View } from "ol";
import { XYZ, Vector } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { Style, Fill, Stroke, Circle } from "ol/style";
import { Feature } from "ol";
import { Point, LineString } from "ol/geom";
import { fromLonLat } from "ol/proj";

const mapRef = useTemplateRef<InstanceType<typeof HTMLElement>>("mapRef");

// 线
const coodLineString = [fromLonLat([120.22, 30.26]), fromLonLat([121.22, 31.26])];

// 点
const coodPonit = fromLonLat([120.22, 30.26]);

const vectorLayer = new VectorLayer({
  source: new Vector({
    features: [
      new Feature({
        geometry: new LineString(coodLineString),
      }),
      new Feature({
        geometry: new Point(coodPonit),
      }),
    ],
  }),
  style: new Style({
    stroke: new Stroke({
      color: "#FF0000",
      width: 2,
    }),
    fill: new Fill({
      color: "#FFFF00",
    }),
    image: new Circle({
      radius: 7,
      fill: new Fill({ color: "#FFFF00" }),
      stroke: new Stroke({ color: "#FF0000", width: 2 }),
    }),
  }),
});

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
      vectorLayer,
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
