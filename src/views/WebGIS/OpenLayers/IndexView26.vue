<script setup lang="ts">
import { Map, View } from "ol";
import { XYZ, Vector } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { Style, Fill, Stroke, Text, Circle } from "ol/style";
import { Draw } from "ol/interaction";
import type { Options } from "ol/interaction/Draw";
import { fromCircle } from "ol/geom/Polygon";
import { getArea, getLength } from "ol/sphere";

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
    const area = feature.get("area") as string;
    const length = feature.get("length") as string;
    const geometryType = feature.getGeometry()?.getType();

    let text = "";

    if (geometryType === "LineString") {
      text = length;
    } else if (geometryType === "Polygon" || geometryType === "Circle") {
      text = area;
    } else {
      text = "xxx 未知图形";
    }

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
        text,
      }),

      image: new Circle({
        radius: 7,
        fill: new Fill({ color: "#FFFF00" }),
        stroke: new Stroke({ color: "#FF0000", width: 2 }),
      }),
    });
  },
});

const { selectValue, onChangeSelect } = (() => {
  const selectValue = ref<Options["type"] | "">("");

  let draw: Draw;

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

    draw.on("drawend", (e) => {
      const feature = e.feature;
      const geom = feature.getGeometry()!;
      if (geom.getType() === "Polygon") {
        const area = getArea(geom);
        feature.set("area", (area / 1000000).toFixed(2) + " km²"); // 转为平方公里
        console.log(area);
      } else if (geom.getType() === "Circle") {
        const polygon = fromCircle(geom, 64); // 转为多边形
        const area = getArea(polygon);
        feature.set("area", (area / 1000000).toFixed(2) + " km²"); // 转为平方公里
        console.log(area);
      } else if (geom.getType() === "LineString") {
        const length = getLength(geom);
        feature.set("length", (length / 1000).toFixed(2) + " km"); // 转为公里
        console.log(length);
      }
    });
  };

  return {
    selectValue,
    onChangeSelect,
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
  gap: 10px;
}
</style>
