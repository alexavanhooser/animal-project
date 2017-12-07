import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { AnimalService } from "../services/animalService";
import { HttpClient } from '@angular/common/http/src/client';
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

export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
    title: string;
    message: string;
    continent: string;

    data: any = [];
    public postList;
  
    private apipath = 'http://localhost:4000/api/animal';

    constructor(dialogService: DialogService,
        private http: HttpClient,
    ) {
        super(dialogService);
    }

    confirm(){
        this.result = true;
        this.close();
    }
    

    getAnimalPic() {
        this.http.get(this.apipath).subscribe(data => {
            this.data = data;
            console.log(data);
          });

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