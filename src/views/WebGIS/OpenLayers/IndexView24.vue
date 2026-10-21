<script setup lang="ts">
import { Map, View } from "ol";
import { XYZ, Vector } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { Style, Fill, Stroke, Text, Circle } from "ol/style";
import { Draw } from "ol/interaction";
import type { Options } from "ol/interaction/Draw";

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
  features: [],
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

      image: new Circle({
        radius: 7,
        fill: new Fill({ color: "#FFFF00" }),
        stroke: new Stroke({ color: "#FF0000", width: 2 }),
      }),
    });
  },
});

const { selectValue, onChangeSelect, onDel } = (() => {
  const selectValue = ref<Options["type"] | "">("");

  let draw: Draw;

  const onDel = () => {
    if (map) {
      // 清空所有图形
      vectorSource.clear();
      selectValue.value = "";
    }
  };

  const onChangeSelect = (val: Options["type"]) => {
    if (draw) {
      // 先删除 上一次的交互
      map.removeInteraction(draw);
    }

    draw = new Draw({
      type: val,
      source: vectorSource,
    });

    map.addInteraction(draw);
  };

  return {
    selectValue,
    onChangeSelect,
    onDel,
  };
})();

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
    // map.getView().fit(extent);
  }

  // map.addInteraction(draw);
});
</script>

<template>
  <div class="warpp">
    <div ref="mapRef" class="map"></div>
    <div class="select">
      <el-select
        v-model="selectValue"
        @change="onChangeSelect"
        placeholder="Select"
        style="width: 240px"
      >
        <el-option label="点" value="Point" />
        <el-option label="线" value="LineString" />
        <el-option label="面" value="Polygon" />
        <el-option label="圆" value="Circle" />
      </el-select>

      <el-button type="danger" @click="onDel">清除所有绘制</el-button>
    </div>
  </div>
</template>

<style>
@import "node_modules/ol/ol.css";
</style>
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

.select {
  position: absolute;
  top: 50px;
  left: 50px;
}
</style>
