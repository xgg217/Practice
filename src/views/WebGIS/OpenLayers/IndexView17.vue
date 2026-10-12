<script setup lang="ts">
import { Map, View, Overlay, Feature } from "ol";
import { XYZ, Vector } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { Style, Icon } from "ol/style";
import { fromLonLat } from "ol/proj";
import a from "./assets/a.png";
import b from "./assets/b.png";
import c from "./assets/c.png";
import { GeoJSON } from "ol/format";

const mapRef = useTemplateRef<InstanceType<typeof HTMLElement>>("mapRef");
const infoRef = useTemplateRef<InstanceType<typeof HTMLElement>>("infoRef");

// type TProperties = {
//   name: string;
//   lng: number;
//   lat: number;
//   type: string;
// };

// type TFeature = FeatureCollection<Geometry, TProperties>;

const poi = [
  { name: "希望小学", lng: 124.789412, lat: 47.347325, type: "school" },
  { name: "蜜雪冰城", lng: 103.007012, lat: 39.53535, type: "school" },
  { name: "天猫超市", lng: 117.872028, lat: 27.100653, type: "market" },
  { name: "如家酒店", lng: 124.642233, lat: 48.042886, type: "market" },
  { name: "人民医院", lng: 87.038159, lat: 31.42261, type: "hospital" },
  { name: "和平饭店", lng: 117.038159, lat: 31.62261, type: "school" },
  { name: "银泰城", lng: 121.038159, lat: 29.42261, type: "market" },
  { name: "海底捞", lng: 111.038159, lat: 28.42261, type: "school" },
];

type TPoi = (typeof poi)[number];

function json2Geojson(json: TPoi[]) {
  const result = {
    type: "FeatureCollection",
    features: [],
  };
  json.forEach((j) => {
    const feature = {
      type: "Feature",
      properties: {},
      geometry: { type: "Point", coordinates: [] as unknown as [number, number] },
    };
    feature.properties = j;
    feature.geometry.coordinates = [j.lng, j.lat];
    // @ts-expect-error 暂时不考虑类型问题
    result.features.push(feature);
  });
  return result;
}

// 点
const coodPonit = fromLonLat([120.22, 30.26]);

const geojson_poi = json2Geojson(poi);

// 矢量图层
const vectorLayer = new VectorLayer({
  source: new Vector({
    features: new GeoJSON().readFeatures(geojson_poi, {
      dataProjection: "EPSG:4326",
      featureProjection: "EPSG:3857",
    }),
  }),

  style: (feature) => {
    let type = feature.get("type");
    let icon = "";
    switch (type) {
      case "school":
        icon = a;
        break;
      case "market":
        icon = b;
        break;
      default:
        icon = c;
    }
    return new Style({
      image: new Icon({
        src: icon,
        scale: 0.6,
      }),
    });
  },
});

const infoName = ref("");
const infoBool = ref(true);

onMounted(() => {
  const overlay = new Overlay({
    element: infoRef.value!,
    positioning: "bottom-center",
    // 地图边缘的时候，进行自动平移
    // autoPan: {
    //   animation: {
    //     duration: 250,
    //   },
    // },
  });

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
    overlays: [overlay],
  });

  console.log(infoRef.value);

  // 鼠标移入事件
  map.on("pointermove", function (e) {
    // e.pixel 坐标
    const feature = map.forEachFeatureAtPixel(e.pixel, function (feat) {
      return feat instanceof Feature ? feat : null;
    });

    console.log(feature);

    if (feature) {
      const name = feature.get("name");
      console.log(name, e.coordinate, overlay);

      infoName.value = name;
      // e.coordinate 坐标点
      overlay.setPosition(e.coordinate);
      infoBool.value = true;

      // const name = feature.get("name");
      // info.innerHTML = name;
      // overlay.setPosition(e.coordinate);
      // info.style.display = "block";
    } else {
      // overlay.setPosition(undefined);
      // info.style.display = "none";
      overlay.setPosition(undefined);
      infoBool.value = false;
    }
  });
});
</script>

<template>
  <div ref="mapRef" class="map"></div>
  <div ref="infoRef" class="info" v-show="infoBool">{{ infoName }}</div>
</template>

<style>
@import "node_modules/ol/ol.css";
</style>
<style scoped>
.map {
  width: 100%;
  height: 100vh;
}

.info {
  background-color: #fff;
  border: 1px solid #000;
  padding: 10px;
}
</style>
