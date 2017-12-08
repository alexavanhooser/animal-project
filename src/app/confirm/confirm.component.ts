import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { AnimalService } from "../services/animalService";
import { HttpClientModule, HttpClient } from '@angular/common/http/';
import { getRandomString } from 'selenium-webdriver/safari';
// import { FormGroup, FormControl } from '@angular/forms';
// import { RegisterComponent } from '../register/register.component';
export interface ConfirmModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
  providers: [AnimalService]
})

export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel, OnInit{
    title: string;
    message: string;
    continent: string;
    animal: any;
 
    data: any = [];
    public postList;
  
    private apipath = 'http://localhost:4000/api/animal';

    constructor(dialogService: DialogService,
        private http: HttpClient,
        private animalService: AnimalService,
    ) {
        super(dialogService);
    }

    confirm(){
        this.result = true;
        this.close();
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
        

            // console.log(this.animal);
          });  
    }
  
    getRandomAnimal(data, num) {
      this.animal = data[num];
      console.log(num);
      return this.animal;
    }
   

    ngOnInit() {

        this.animalService.getAnimals()
        .subscribe(data => {
            // this.animals = data;
            this.getRandomAnimal(data, Math.floor(Math.random() * 25));
            // console.log(data);
            // resolve(this.data);
          });

        // this.getRandomAnimal()
        
      
      }
//   form;
//   email:string;
//   password: string;
//   constructor(dialogService: DialogService) {
//     super(dialogService);
//    }
//    register() {
//     let disposable = this.dialogService.addDialog(RegisterComponent, { });
//    }
//    confirm() {
//          // we set dialog result as true on click on confirm button, 
//           // then we can get dialog result from caller code 
//     this.result = true;
//     this.close();
//   }
//   onSubmit(user){
//     console.log('user', user);
//   }
   
//   ngOnInit() {
//     this.form = new FormGroup({
//       email: new FormControl(''),
//       password: new FormControl('')
//     });
//   }
}