<script setup lang="ts">
import { Map, View } from "ol";
import { XYZ, Vector } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { GeoJSON } from "ol/format";
import hangzhou from "./assets/hangzhou.json?url";
import { Style, Fill, Stroke, Text } from "ol/style";
import "ol/ol.css";

const mapRef = useTemplateRef<InstanceType<typeof HTMLElement>>("mapRef");

const vectorSource = new Vector({
  url: hangzhou,
  // url: "https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=330600_full",
  format: new GeoJSON({
    dataProjection: "EPSG:4326", // 数据源是经纬度
    featureProjection: "EPSG:3857", // 地图是墨卡托
  }),
});

const getColor = (heat: string) => {
  const num = parseInt(heat);

  if (num > 30 && num < 33) {
    return "rgb(255, 0, 0, 0.2)";
  } else if (num > 34 && num < 35) {
    return "rgb(255, 0, 0, 0.5)";
  } else {
    return "rgb(255, 255, 0, 0.9)";
  }
};

const vectorLayer = new VectorLayer({
  source: vectorSource,

  style: (feature) => {
    const name = feature.get("name");
    const heat = feature.get("heat");

    return new Style({
      stroke: new Stroke({
        color: "#FF0000",
        width: 2,
      }),
      fill: new Fill({
        // color: 'rgb(255, 255, 0, 0.5)',
        // color: "#FFFF0080",
        color: getColor(heat),
      }),
      text: new Text({
        font: "16px sans-serif",
        fill: new Fill({
          color: "black",
        }),
        text: name,
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
