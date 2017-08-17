import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './router.module'
import { AdminsModule} from './Admins/admins.module'
import { UsersModule} from './Users/users.module'

import { AppComponent } from './app.component';
import { LostComponent } from './lost.component'

@NgModule({
  declarations: [
    AppComponent, LostComponent//, UsersComponent, AdminsComponent
  ],
  imports: [
    BrowserModule, RoutingModule, AdminsModule, UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }