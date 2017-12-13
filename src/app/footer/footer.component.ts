import { Component, OnInit } from '@angular/core';
import { SourcesComponent } from '../sources/sources.component';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private dialogService: DialogService,    
  ) { }

  showDiv() {
    let element: HTMLElement = document.getElementById('displayFooter');
    if(element.style.display === "block") 
    {
      element.style.display = 'none';
    }
    else
    {
      element.style.display = 'block';
    }
  };

  showSources() { 
    let disposable = this.dialogService.addDialog(SourcesComponent, {});
  }

  ngOnInit() {
  }

}
// THIS IS THE JAVASCRIPT FOR THE BUTTON
// function showDiv() {
//     var x = document.getElementById("displayFooter");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }
