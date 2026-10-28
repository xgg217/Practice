<script setup lang="ts">
import { Map, View } from "ol";
import { XYZ, Vector } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { GeoJSON } from "ol/format";
import hangzhou from "./assets/hangzhou.json";
import { Style, Fill, Stroke, Text } from "ol/style";
import { Modify } from "ol/interaction";
import "ol/ol.css";

const mapRef = useTemplateRef<InstanceType<typeof HTMLElement>>("mapRef");
let map: Map;

const vectorSource = new Vector({
  // url: hangzhou,
  // // // url: "https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=330600_full",
  // // format: new GeoJSON({
  // //   dataProjection: "EPSG:4326", // 数据源是经纬度
  // //   featureProjection: "EPSG:3857", // 地图是墨卡托
  // // }),
  // format: new GeoJSON({
  //   dataProjection: "EPSG:4326", // 数据源是经纬度
  //   featureProjection: "EPSG:3857", // 地图是墨卡托
  // }),
  features: new GeoJSON().readFeatures(hangzhou, {
    dataProjection: "EPSG:4326", // 数据源是经纬度
    featureProjection: "EPSG:3857", // 地图是墨卡托
  }),
});

const modify = new Modify({
  source: vectorSource,
});

const vectorLayer = new VectorLayer({
  source: vectorSource,

  style: (feature) => {
    const name = feature.get("name");

    return new Style({
      stroke: new Stroke({
        color: "#FF0000",
        width: 2,
      }),
      fill: new Fill({
        color: "#FFFF0080",
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
  map = new Map({
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

  const extent = vectorSource.getExtent();

  if (extent) {
    map.getView().fit(extent);
  }

  map.addInteraction(modify);
});
</script>

<template>
  <div class="warpp">
    <div ref="mapRef" class="map"></div>
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
</style>
