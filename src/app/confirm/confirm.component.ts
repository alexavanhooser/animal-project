import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
// import { FormGroup, FormControl } from '@angular/forms';
// import { RegisterComponent } from '../register/register.component';

export interface ConfirmModel {
  title:string;
  message:string;
}

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})

export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
    title: string;
    message: string;

    constructor(dialogService: DialogService) {
        super(dialogService);
    }

    confirm(){
        this.result = true;
        this.close();
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
