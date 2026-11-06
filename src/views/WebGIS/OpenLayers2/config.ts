import { transformExtent, fromLonLat } from "ol/proj";

export const TDT_TOKEN = "55c0066c8dd3630394c756dfcd97add5";
export const ZJS_CENTER = [120.5, 29.5]; // 浙江省的中心点
export const ZJS_EXTENT = [117, 26, 124, 32]; // [minX, minY, maxX, maxY] 浙江省的范围
export const GeoJSON_URL = "https://geo.datav.aliyun.com/areas_v3/bound/geojson";
export const ZJS_GeoJSON_URL = `${GeoJSON_URL}?code=330000_full`;

export const CENTER = fromLonLat(ZJS_CENTER); // 中心点
export const EXTENT = transformExtent(ZJS_EXTENT, "EPSG:4326", "EPSG:3857"); // 范围

// 矢量底图 vec_w
export const TDT_VECURL =
  "https://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=" +
  import.meta.env.VITE_API_TIANDITU_MAP;

// 矢量标记 cva_w
export const TDT_CVAURL =
  "https://t0.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=" +
  import.meta.env.VITE_API_TIANDITU_MAP;

// 城市信息
export const ZJS_CITYS = [
  { name: "杭州市", value: 330100 },
  { name: "宁波市", value: 330200 },
  { name: "温州市", value: 330300 },
  { name: "嘉兴市", value: 330400 },
  { name: "湖州市", value: 330500 },
  { name: "绍兴市", value: 330600 },
  { name: "金华市", value: 330700 },
  { name: "衢州市", value: 330800 },
  { name: "舟山市", value: 330900 },
  { name: "台州市", value: 331000 },
  { name: "丽水市", value: 331100 },
] as const;

// 质量检测
export const QUALITY_LEVELS = [
  { name: "极差", value: 0 },
  { name: "较差", value: 1 },
  { name: "中等", value: 2 },
  { name: "良好", value: 3 },
  { name: "优质", value: 4 },
] as const;

//
export const GEOMETRY_TYPES = [
  { name: "多边形", value: "Polygon" },
  { name: "圆形", value: "Circle" },
  { name: "清除", value: "Clear" },
] as const;
