import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() header: string = 'this is a header';
  @Input() footer: string = 'this is footer';

  constructor() { }

  ngOnInit() {
  }

}
