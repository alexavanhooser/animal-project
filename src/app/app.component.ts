import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NgClass } from '@angular/common';
import { ConfirmComponent } from './confirm/confirm.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { FormGroup, FormControl } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { AnimalService } from './services/animalService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AnimalService]
})

export class AppComponent implements OnInit {
  public title = 'SpeciesHop';

  animal_id="";
  animal=null;

  
  constructor(
    private animalService:AnimalService,
    private dialogService: DialogService) {}
    showConfirm() { 
      let disposable = this.dialogService.addDialog(ConfirmComponent, {});
    }
   

  
  ngOnInit () {
    // get selected pet_id from local storage, and then load from db.

  };

  // goAnimals() {
  //   this.animalService.getAnimal().then(data => this.animal = data);
  //  }

 }

   

    
  

