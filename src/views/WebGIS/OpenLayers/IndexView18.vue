<script setup lang="ts">
import { Map, View, Feature } from "ol";
import { XYZ, Vector } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { Style, Icon } from "ol/style";
import center from "./assets/center.svg";
import { fromLonLat } from "ol/proj";
import { Point } from "ol/geom";
import { Link } from "ol/interaction";
import "ol/ol.css";

const mapRef = useTemplateRef<InstanceType<typeof HTMLElement>>("mapRef");

const link = new Link();

// 点
const coodPonit = fromLonLat([120.22, 30.26]);

const vectorLayer = new VectorLayer({
  source: new Vector({
    features: [
      new Feature({
        geometry: new Point(coodPonit),
      }),
    ],
  }),

  style: new Style({
    image: new Icon({
      src: center,
      scale: 0.2,
    }),
  }),
});

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

  map.addInteraction(link);
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
