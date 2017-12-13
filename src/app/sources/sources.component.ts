import { Component, OnInit } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { HttpClientModule, HttpClient } from '@angular/common/http/';

export interface SourcesModel {
}

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})



export class SourcesComponent extends DialogComponent<SourcesModel, boolean> implements SourcesModel, OnInit{ 

  constructor(dialogService: DialogService,
    private http: HttpClient) {
    super(dialogService);
}

  ngOnInit() {
  }

}
