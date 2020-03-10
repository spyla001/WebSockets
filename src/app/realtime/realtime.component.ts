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
  pointer = 'yearly';
  constructor(private datastore: DatastoreService) { }

  ngOnInit() {
    this.getAnnualSummary();
    this.getAnnual();
    this.myWeb.subscribe(
      msg => {
       console.log(this.data);
       switch (this.pointer) {
          case 'yearly':
            this.getAnnualSummary();
            break;
          case 'quarterly':
           this.getQuarterSummary();
           break;
          case 'monthly':
            this.getMonthlySummary();
            break;
          case 'weekly':
            this.getWeeklySummary();
            break;
          case 'daily':
            this.getDailySummary();
            break;
          default:
            this.pointer = 'yearly';
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

  getMonthlySummary() {
    this.datastore.getMonthlySum().subscribe(
      data => {
        this.textbox = data;
      }
    );
  }

  getWeeklySummary() {
    this.datastore.getWeeklySum().subscribe(
      data => {
        this.textbox = data;
      }
    );
  }

  getDailySummary() {
    this.datastore.getDailySum().subscribe(
      data => {
        this.textbox = data;
      }
    );
  }



  getMonthly() {
    this.datastore.getMonthlyRecord().subscribe(data => {
      console.log(data);
      this.tabledata = data;
      this.nav.emit(data); });
  }

  getDaily() {
    this.datastore.getDailyReacords().subscribe(data => {
      console.log(data);
      this.tabledata = data;
      this.nav.emit(data); });
  }

  getWeekly() {
    this.datastore.getWeeklyRecords().subscribe(
      data => {
        this.textbox = data;
      }
    );
  }

  onClick(value: string) {
    switch (value) {
      case 'yearly':
        this.pointer = value;
        this.getAnnual();
        this.getAnnualSummary();
        break;
      case 'quarterly':
        this.pointer = value;
        this.getQuarter();
        this.getQuarterSummary();
        break;
      case 'monthly':
        this.pointer = value;
        this.getMonthly();
        this.getMonthlySummary();
        break;
      case 'weekly':
        this.pointer = value;
        this.getWeekly();
        this.getWeeklySummary();
        break;
      case 'daily':
        this.pointer = value;
        this.getDaily();
        this.getDailySummary();
        break;
      default:
        this.pointer = 'weekly';
        this.getAnnual();
        this.getAnnualSummary();
    }

    // if (value === 'quarterly') {
    //   this.pointer = value;
    //   console.log(value);
    //   // this.getQuarter();
    // } else {
    //   this.pointer = value;
    //   console.log(value);
    //   // this.getAnnual();
    // }
  }

}
