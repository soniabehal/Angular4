import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CustomRouting } from './custom-routing.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecepieComponent } from './recepie/recepie.component';
import { RecepieListComponent } from './recepie/recepie-list/recepie-list.component';
import { RecepieItemComponent } from './recepie/recepie-list/recepie-item/recepie-item.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEdittComponent } from './shopping/shopping-editt/shopping-editt.component';
import { RecepieDetailComponent } from './recepie/recepie-detail/recepie-detail.component';
import { CustomHighlighter } from './CustomDirectives/custom-highlighter.directive';
import { BetteronebroDirective } from './CustomDirectives/betteronebro.directive'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    RecepieComponent,
    RecepieListComponent,
    RecepieItemComponent,
    ShoppingListComponent,
    ShoppingEdittComponent,
    RecepieDetailComponent,
    CustomHighlighter,
    BetteronebroDirective
  ],
  imports: [
    BrowserModule, FormsModule, CustomRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
