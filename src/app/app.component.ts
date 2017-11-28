import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { CardComponent } from './card/card.component';
import { User } from './models/user';
import { FormGroup, FormControl } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Undecided Animal Adventure';
  
  form;
  constructor(private dialogService:DialogService) {}
    showConfirm() {
    let disposable = this.dialogService.addDialog(ConfirmComponent, { });

    // This would be where the information for the user login would be placed
    // if isConfirmed{
        // check to make sure that user is registered in the db
        // else make them register
    //}
    // .subscribe((isConfirmed)=>{
    //   //We get the dialog result
    //   // if(isConfirmed){
    //   //   alert('accepted');
    //   // }
    //   // else{
    //   //   alert('declined');
    //   // }
    //   });
    }
    onSubmit(user){
      console.log('User is: ', user);
    }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }
  }
