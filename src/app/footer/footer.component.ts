import { Component, OnInit } from '@angular/core';
import { } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

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
