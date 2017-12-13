import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { AnimalService } from "../services/animalService";
import { HttpClientModule, HttpClient } from '@angular/common/http/';
import { getRandomString } from 'selenium-webdriver/safari';
import { MapComponent } from '../map/map.component'; 
// import { FormGroup, FormControl } from '@angular/forms';
// import { RegisterComponent } from '../register/register.component';
export interface ConfirmModel {
  continent: any;
}

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
  providers: [AnimalService, MapComponent]
})

export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit{
    title: string;
    message: string;
    continent: any;
    animal: any;
 
    data: any = [];
  
    private apipath = 'http://localhost:4000/api/animal';

    constructor(dialogService: DialogService,
        private http: HttpClient,
        private animalService: AnimalService,
    ) {
        super(dialogService);
    }

    

    // getAnimalPic() {
    //     this.http.get(this.apipath).subscribe(data => {
    //         this.data = data;
    //         console.log(data);
    //       });  
    // }

    getAnimals() {
        return this.http.get(this.apipath).subscribe(data => {
            this.data = data;
          });  
    }
  
    getRandomAnimal(data, num) {
      this.animal = data[num];
      return this.animal;
    }

    confirmYes(){
        if(this.continent === this.animal.continent){
        
        }else{
            alert("Try Again!");
        }     
          // this.result = true;
    }

    confirmNo(){
        if(this.continent !== this.animal.continent){
            console.log(true);
        }else{
            alert("Try Again!");
        }     
          // this.result = true;
    }
   


    ngOnInit() {

        this.animalService.getAnimals()
        .subscribe(data => {
            // this.animals = data;
            this.getRandomAnimal(data, Math.floor(Math.random() * 27));
            // console.log(data);
            // resolve(this.data);
          });


}}