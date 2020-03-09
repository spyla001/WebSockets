import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DatastoreService} from '../services/datastore.service';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';


@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.css']
})
export class RealtimeComponent implements OnInit {
@Output() nav = new EventEmitter();
myWeb: WebSocketSubject<any> = webSocket('ws://localhost:8080/socket')
  data = [{name: 'star', orders: 400}, {name: 'rain', orders: 500}, {name: 'naix', orders: 500}, {name: 'droop', orders: 270}];
  tabledata: any;
  textbox: any;
  pointer: string;
  constructor(private datastore: DatastoreService) { }

  ngOnInit() {
    this.getAnnual();
    this.myWeb.subscribe(
      msg => {
       console.log(this.data);
       if (this.pointer === 'quarterly') {
         this.getQuarterSummary();
       } else if (this.pointer === 'yearly') {
         this.getAnnualSummary();
       } else {
         this.getAnnualSummary();
       }
      }
    );
  }

  getAnnual() {
    this.datastore.getAnnual().subscribe(data => {
      console.log(data);
      console.log(data)
      this.tabledata = data;
      this.nav.emit(data); });
  }
  getQuarter() {
    this.datastore.getQuaterly().subscribe(data => {
          console.log(data);
          this.tabledata = data;
          this.nav.emit(data); });
  }

  getAnnualSummary() {
    this.datastore.getAnnualSum().subscribe(
      data => {
        this.textbox = data;
      }
    );
  }
  getQuarterSummary() {
    this.datastore.getQuarterSum().subscribe(
      data => {
        this.textbox = data;
      }
    );
  }

  onClick(value: string) {
    if (value === 'quarterly') {
      this.pointer = value;
      this.getQuarter();
    } else {
      this.pointer = value;
      this.getAnnual();
    }
  }

}
