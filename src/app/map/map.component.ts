import { Component, OnInit } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private chart: AmChart;
  
  constructor(private AmCharts: AmChartsService) { }

  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart("chartdiv", {




      "type": "map",
      "theme": "none",
      "projection": "miller",
    
      "dataProvider": {
        "map": "worldLow",
        "getAreasFromMap": true
      },
      "areasSettings": {
        "autoZoom": true,
        "selectedColor": "#CC0000"
      },
      "smallMap": {},
      "export": {
        "enabled": true,
        "position": "bottom-right"
      }
    } );
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }

  ngOnInit() {
  }

}
