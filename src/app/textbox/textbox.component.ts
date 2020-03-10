import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
 @Input() data;
  constructor() { }

  ngOnInit() {
    if (!this.data) {
      return;
    }
    console.log(this.data);
  }
}
