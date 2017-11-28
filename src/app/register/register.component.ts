import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';

export interface RegisterModel {
  fName:string;
  email:string;
  password:string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent extends DialogComponent<RegisterModel, boolean> implements RegisterModel {
  model: any = {};
  form;
  fName: string;
  email:string;
  password: string;
  constructor(dialogService: DialogService, private userService: UserService) {
    super(dialogService);
   }
   onSubmit(user){
    console.log('user', user);
    this.register();
  }
  register(){
    this.userService.create(this.model)
      .subscribe(
        data => {
          console.log('Registration successful');
          // DO something after registering
          // i.e. navigating to another page
          alert('Successful Registration');
        },
        error => {
          console.log("There was an error creating the account");
          alert('Registration not successful');
        });
  }

   ngOnInit() {
    this.form = new FormGroup({
      fName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')

    });
  }

}
