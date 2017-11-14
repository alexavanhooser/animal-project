import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
export interface ConfirmModel {
  email:string;
  password:string;
}

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})

export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  email:string;
  password: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
   }
   confirm() {
         // we set dialog result as true on click on confirm button, 
          // then we can get dialog result from caller code 
    this.result = true;
    this.close();
  }
   
  ngOnInit() {
  }

}
