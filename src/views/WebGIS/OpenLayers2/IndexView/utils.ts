import { Map, View, MapBrowserEvent, Feature } from "ol";
import { Style, Fill, Stroke, Text, Circle, Icon } from "ol/style";
import type { FeatureLike } from "ol/Feature";
import type { Extent } from "ol/Extent";
import jiance_on from "@/views/WebGIS/OpenLayers2/assets/jiance_on.png";
import jiance_off from "@/views/WebGIS/OpenLayers2/assets/jiance_off.png";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { XYZ, Vector } from "ol/source";
import { ZJS_GeoJSON_URL, TDT_VECURL, TDT_CVAURL } from "@/views/WebGIS/OpenLayers2/config";
import { GeoJSON } from "ol/format";
import type { Geometry, Point, Circle as GeomCircle } from "ol/geom";

import {
  defaults as defaultControls,
  ScaleLine,
  ZoomSlider,
  FullScreen,
  OverviewMap,
} from "ol/control";

// 数据源-样式
export const styleObj = (() => {
  /**
   * 城市图层样式
   */
  const initCityVectorStyle = new Style({
    stroke: new Stroke({
      color: "#FF0000",
      width: 2,
      lineDash: [10, 10],
    }),
    fill: new Fill({
      color: "rgba(255, 255, 255, 0)", // 透明白色
      // color: "red",
    }),
  });

  /**
   * 激活的样式
   * @returns
   */
  const activeCityVectorStyle = new Style({
    stroke: new Stroke({
      color: "#0000FF",
      width: 2,
      lineDash: [10, 10],
    }),
    fill: new Fill({
      color: "rgba(255, 255, 0, 0.3)",
    }),
  });

  const overviewVectorStyle = (feature: FeatureLike) => {
    return new Style({
      stroke: new Stroke({
        color: "#FF0000",
        width: 1,
      }),
      text: new Text({
        font: "12px sans-serif",
        fill: new Fill({
          color: "#005500",
        }),
        text: feature.get("name"),
      }),
    });
  };

  const monitorVectorStyle = (feature: FeatureLike) => {
    const status = feature.get("status") ?? "on";
    return new Style({
      image: new Icon({
        src: status === "on" ? jiance_on : jiance_off,
        width: 50,
        height: 50,
      }),
    });
  };

  const geometryStyle = (feature: FeatureLike) => {
    return new Style({
      image: new Circle({
        radius: 10,
        fill: new Fill({
          color: "#FFFF0080",
        }),
        stroke: new Stroke({
          color: "#FF0000",
          width: 2,
        }),
      }),
      fill: new Fill({
        color: "#FFFF0080",
      }),
      stroke: new Stroke({
        color: "#FF0000",
        width: 2,
      }),
      text: new Text({
        font: "14px sans-serif",
        fill: new Fill({
          color: "#0000FF",
        }),
        text: feature.get("area"),
      }),
    });
  };

  return {
    initCityVectorStyle,
    activeCityVectorStyle,
    overviewVectorStyle,
    monitorVectorStyle,
    geometryStyle,
  };
})();

// 图层
export const layerObj = (() => {
  /**
   * 基础图层
   */
  const baseVecLayer = new TileLayer({
    source: new XYZ({
      url: TDT_VECURL,
    }),
  });

  /**
   * 标记图层
   */
  const tagCvaLayer = new TileLayer({
    source: new XYZ({
      url: TDT_CVAURL,
    }),
  });

  /**
   * 浙江省城市图层 GeoJSON
   */
  const cityLayer = new VectorLayer({
    source: new Vector({
      url: ZJS_GeoJSON_URL,
      format: new GeoJSON({
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857",
      }),
    }),
    style: styleObj.initCityVectorStyle,
  });

  const overviewLayer = new VectorLayer({
    source: new Vector({
      url: ZJS_GeoJSON_URL,
      format: new GeoJSON({
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857",
      }),
    }),
    style: styleObj.overviewVectorStyle,
  });

  const monitorLayer = new VectorLayer({
    source: new Vector<Feature<Geometry>>({
      features: [],
    }),
    style: styleObj.monitorVectorStyle,
  });

  const geometryLayer = new VectorLayer({
    source: new Vector<Feature<Geometry>>({
      features: [],
    }),
    style: styleObj.geometryStyle,
  });

  return {
    baseVecLayer,
    tagCvaLayer,
    cityLayer,
    overviewLayer,
    monitorLayer,
    geometryLayer,
  };
})();

/**
 * Controls 地图控件
 * @param extent
 * @returns
 */
export const getControls = (extent: Extent) => {
  return defaultControls().extend([
    new ScaleLine(),
    new ZoomSlider(),
    new FullScreen(),
    new OverviewMap({
      layers: [layerObj.overviewLayer],
      collapsed: false,
      view: new View({
        extent,
      }),
    }),
  ]);
};
