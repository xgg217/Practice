<script setup lang="ts">
import { Map, View } from "ol";
import { XYZ, Vector } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { Style, Fill, Stroke, Text } from "ol/style";
import { WKT } from "ol/format";
import "ol/ol.css";

const mapRef = useTemplateRef<InstanceType<typeof HTMLElement>>("mapRef");

// 多边形
const wkt = `POLYGON((120.29 30.34, 120.28 30.21, 120.40 30.21, 120.47 30.32, 120.29 30.34))`;

const vectorSource = new Vector({
  features: new WKT().readFeatures(wkt, {
    dataProjection: "EPSG:4326",
    featureProjection: "EPSG:3857",
  }),
});

const vectorLayer = new VectorLayer({
  source: vectorSource,

  style: () => {
    return new Style({
      stroke: new Stroke({
        color: "#FF0000",
        width: 2,
      }),
      fill: new Fill({
        color: "rgb(255, 255, 0, 0.5)",
      }),
      text: new Text({
        font: "16px sans-serif",
        fill: new Fill({
          color: "black",
        }),
        text: "WKT多边形",
      }),
    });
  },
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
      center: [0, 0],
      // center: coordinate,
      zoom: 4,
    }),
  });

  vectorSource.on("change", () => {
    if (vectorSource.getState() === "ready") {
      const extent = vectorSource.getExtent()!;
      map.getView().fit(extent);
    }
  });
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
