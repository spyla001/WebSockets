// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:8080',
  webSocket: 'ws://localhost:8080/socket',
  anualRecords: 'http://localhost:8080/getAnnually',
  quaterlyRecords: 'http://localhost:8080/getQuarterly',
  annualSummary: 'http://localhost:8080/getAnnuallySummary',
  quarterSummary: 'http://localhost:8080/getQuarterlySummary',
  monthlyRecords: 'http://localhost:8080/getMonthly',
  weekly: 'http://localhost:8080/getWeekly',
  daily: 'http://localhost:8080/getDaily',
  monthlySummary: 'http://localhost:8080/getDailySummary',
  weeklySummary: 'http://localhost:8080/getDailySummary',
  dailySummary: 'http://localhost:8080/getDailySummary'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
