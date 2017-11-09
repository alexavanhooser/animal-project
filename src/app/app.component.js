var map = AmCharts.makeChart( "chartdiv", {

  "type": "map",
  "theme": "none",
  "projection": "miller",

  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true
  },
  "areasSettings": {
    "autoZoom": true,
    "selectedColor": "#00cccc"
  },
  "smallMap": {},
  "export": {
    "enabled": true,
    "position": "bottom-right"
  }
} );
