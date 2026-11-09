export type TMonitors = {
  id: number;
  name: string;
  lng: number;
  lat: number;
  city: string;
  status: "on" | "off"; // off关闭
  quality: number; // 质量等级
  monitorArea: number; // 面积
  allArea: number; // 总面积
};
