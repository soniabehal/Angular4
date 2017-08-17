import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { AmChartsModule } from '@amcharts/amcharts3-angular'

import { AmChartsService } from '@amcharts/amcharts3-angular'

import { AppComponent } from './app.component'
import { CharterComponent } from './charter/charter.component';

@NgModule({
  declarations: [
    AppComponent,
    CharterComponent
  ],
  imports: [
    BrowserModule, AmChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
