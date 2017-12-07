import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface AnimalModel {
  title:string;
  message:string;
}


@Component({
  selector: 'app-animalinfo',
  templateUrl: './animalinfo.component.html',
  styleUrls: ['./animalinfo.component.css']
})
export class AnimalinfoComponent extends DialogComponent<AnimalModel, boolean> implements AnimalModel {
  title: string;
  message: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
}

confirm(){
  this.result = true;
  this.close();
}
  ngOnInit() {
  }

}
