import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DatastoreService} from '../services/datastore.service';

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.css']
})
export class RealtimeComponent implements OnInit {
@Output() nav = new EventEmitter();
  data = [{name: 'star', orders: 400}, {name: 'rain', orders: 500}, {name: 'naix', orders: 500}, {name: 'droop', orders: 270}];
  tabledata: any;
  constructor(private datastore: DatastoreService) { }

  ngOnInit() {
  }

  getAnnual() {
    this.datastore.getAnnual().subscribe(data => {
      console.log(data);
      this.tabledata = data;
      this.nav.emit(data);});
  }
  getQuarter() {
    this.datastore.getQuaterly().subscribe(data => {
          console.log(data);
          this.tabledata = data;
          this.nav.emit(data);});
  }
  onClick(value: string) {
    if (value === 'quarterly') {
      this.getQuarter();
    } else {
      this.getAnnual();
    }
  }

}
