import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RecepiesComponent } from './recepies.component';
import { RecepieListComponent } from './recepie-list/recepie-list.component';

import { RecepiesRoutingModule } from './recepies-routing.module'


@NgModule({
    declarations: [RecepiesComponent,RecepieListComponent],
    imports: [CommonModule, RecepiesRoutingModule]
  
})
export class RecepiesModule {}