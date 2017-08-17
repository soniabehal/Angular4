import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CustomRouting } from './custom-routing.module'
import { RecepiesModule } from './recepie/recepies.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEdittComponent } from './shopping/shopping-editt/shopping-editt.component';
import { RecepieService } from './recepie/recepie.service'
import { ShoppingService } from './shopping/shopping.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingEdittComponent,
  ],
  imports: [
    BrowserModule, FormsModule, CustomRouting, RecepiesModule
  ],
  providers: [RecepieService,ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
