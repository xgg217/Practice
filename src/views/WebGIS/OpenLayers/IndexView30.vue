<script setup lang="ts">
import { Map, View } from "ol";
import { XYZ, Vector } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { Style, Fill, Stroke, Circle } from "ol/style";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import "ol/ol.css";

const mapRef = useTemplateRef<InstanceType<typeof HTMLElement>>("mapRef");

// 点
const coodPonit = fromLonLat([120.22, 30.26]);
const rippleProgress = ref(0);

// 自定义矢量数据
const vectorSource = new Vector({
  features: [
    new Feature({
      geometry: new Point(coodPonit),
    }),
  ],
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
  style: () => {
    const rippleRadius = 30 * rippleProgress.value;
    const opacity = 1 - rippleProgress.value;

    return new Style({
      stroke: new Stroke({
        color: "#FF0000",
        width: 2,
      }),
      fill: new Fill({
        color: "#FFFF00",
      }),
      image: new Circle({
        radius: rippleRadius,
        fill: new Fill({ color: "#FFFF00" }),
        // stroke: new Stroke({ color: "#FF0000", width: 2 }),
        stroke: new Stroke({ color: `rgba(255, 0, 0, ${opacity})`, width: 2 }),
      }),
    });
  },
});

const animateRipple = () => {
  rippleProgress.value += 0.01;
  if (rippleProgress.value > 1) {
    rippleProgress.value = 0;
  }
  vectorLayer.changed();
  requestAnimationFrame(animateRipple);
};

onMounted(() => {
  const map = new Map({
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
      center: coodPonit,
      // center: coordinate,
      zoom: 4,
    }),
  });

  animateRipple();
});
</script>

<template>
  <div ref="mapRef" class="map"></div>
</template>

<style scoped>
.map {
  width: 100%;
  height: 100vh;
}
</style>
