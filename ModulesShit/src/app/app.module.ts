import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RecepiesModule } from './Recepie/recepie.module'
import { RoutingModule } from './routing.module'
import { ShoppingModule } from './Shopping/shopping.module'
import { ErrorsModule } from './Errors/errors.module'

import { AppComponent } from './app.component';

import { AuthProvider } from './auth-provider.service'
import { Auth } from './auth.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RecepiesModule, RoutingModule, ShoppingModule, ErrorsModule
  ],
  providers: [AuthProvider, Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
