import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { RecepieComponent } from './recepie.component';
import { RecepieListComponent } from './recepie-list/recepie-list.component';
import { RecepieItemComponent } from './recepie-list/recepie-item/recepie-item.component';
import { RecepieDetailComponent } from './recepie-detail/recepie-detail.component';

import { CustomHighlighter } from '../CustomDirectives/custom-highlighter.directive';
import { BetteronebroDirective } from '../CustomDirectives/betteronebro.directive';
import { ClassAdderDirective } from '../CustomDirectives/class-adder.directive'

@NgModule({
    declarations:[
RecepieComponent,RecepieListComponent,RecepieItemComponent,RecepieDetailComponent,CustomHighlighter,BetteronebroDirective,ClassAdderDirective
    ],
    imports:[CommonModule,FormsModule],
    providers:[],
})
export class RecepiesModule{}