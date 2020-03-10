import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RealtimeComponent } from './realtime/realtime.component';
import { DonutComponent } from './donut/donut.component';
import { TextboxComponent } from './textbox/textbox.component';
import { TabledataComponent } from './tabledata/tabledata.component';
import { DatastoreService} from './services/datastore.service';
import { HttpClientModule} from '@angular/common/http';
import { SingleComponent } from './single/single.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RealtimeComponent,
    DonutComponent,
    TextboxComponent,
    TabledataComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DatastoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
