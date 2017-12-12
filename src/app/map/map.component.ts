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
  public continent; 

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
    this.continent = document.getElementsByClassName("land")[0].getAttribute("id");
    let disposable = this.dialogService.addDialog(ConfirmComponent, {continent : this.continent});
    console.log(this.continent);
  }

  showAnimalAsia() { 
     this.continent = document.getElementsByClassName("land")[1].getAttribute("id");
    let disposable = this.dialogService.addDialog(ConfirmComponent, {continent : this.continent});
    console.log(this.continent);
  }

  showAnimalNorthAmerica() { 
    this.continent = document.getElementsByClassName("land")[2].getAttribute("id");
    let disposable = this.dialogService.addDialog(ConfirmComponent, {continent : this.continent});
    console.log(this.continent);
  }

  showAnimalAfrica() { 
    this.continent = document.getElementsByClassName("land")[3].getAttribute("id");
    let disposable = this.dialogService.addDialog(ConfirmComponent, {continent : this.continent});
    console.log(this.continent);
  }

  showAnimalSouthAmerica() { 
    this.continent = document.getElementsByClassName("land")[4].getAttribute("id");
    let disposable = this.dialogService.addDialog(ConfirmComponent, {continent : this.continent});
    console.log(this.continent);
  }

  showAnimalAustralia() { 
    this.continent = document.getElementsByClassName("land")[5].getAttribute("id");
    let disposable = this.dialogService.addDialog(ConfirmComponent, {continent : this.continent});
    console.log(this.continent);
  }

  


};
