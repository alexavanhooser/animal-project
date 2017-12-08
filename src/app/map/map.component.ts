import { Component, OnInit } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import { ConfirmComponent } from "../confirm/confirm.component";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { AnimalinfoComponent } from '../animalinfo/animalinfo.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent implements OnInit {
  private chart: AmChart;
  data: any = [];
  public postList;
  animal: any;

  private apipath = 'http://localhost:4000/api/animal';

  constructor(
    private AmCharts: AmChartsService,
    private dialogService: DialogService,
    private http: HttpClient,
    
  ) { 
    
    
   
  };

  
  ngOnInit(){
  };

  showAnimalEurope() { 
    let continent = document.getElementsByClassName("land")[0].getAttribute("id");
    let disposable = this.dialogService.addDialog(ConfirmComponent, {});
    console.log(continent);
  }

  showAnimalAsia() { 
    let continent = document.getElementsByClassName("land")[1].getAttribute("id");
    let disposable = this.dialogService.addDialog(ConfirmComponent, {});
    console.log(continent);
  }

  showAnimalNorthAmerica() { 
    let continent = document.getElementsByClassName("land")[2].getAttribute("id");
    let disposable = this.dialogService.addDialog(ConfirmComponent, {});
    console.log(continent);
  }

  showAnimalAfrica() { 
    let continent = document.getElementsByClassName("land")[3].getAttribute("id");
    let disposable = this.dialogService.addDialog(ConfirmComponent, {});
    console.log(continent);
  }

  showAnimalSouthAmerica() { 
    let continent = document.getElementsByClassName("land")[4].getAttribute("id");
    let disposable = this.dialogService.addDialog(ConfirmComponent, {});
    console.log(continent);
  }

  showAnimalAustralia() { 
    let continent = document.getElementsByClassName("land")[5].getAttribute("id");
    let disposable = this.dialogService.addDialog(ConfirmComponent, {});
    console.log(continent);
  }

  


};
