import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ShoppingComponent } from './shopping.component'

const routes: Routes=[
{
    path: 'shop',
    component: ShoppingComponent
}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppingRoutingModule{}