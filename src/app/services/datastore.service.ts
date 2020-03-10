import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  Url = environment;
  constructor(private http: HttpClient) { }

  getAnnual() {
    return this.http.get(this.Url.anualRecords);
  }
  getQuaterly() {
    return this.http.get(this.Url.quaterlyRecords);
}
getAnnualSum() {
    return this.http.get(this.Url.annualSummary);
}

getQuarterSum() {
    return this.http.get(this.Url.quarterSummary);
}
getMonthlySum() {
    return this.http.get(this.Url.monthlySummary);
  }
  getWeeklySum() {
    return this.http.get(this.Url.weeklySummary);
  }
  getDailySum() {
    return this.http.get(this.Url.dailySummary);
  }
  getDailyReacords() {
    return this.http.get(this.Url.daily);
  }

  getMonthlyRecord() {
    return this.http.get(this.Url.monthlyRecords);
  }

  getWeeklyRecords() {
    return this.http.get(this.Url.weekly);
  }
}

