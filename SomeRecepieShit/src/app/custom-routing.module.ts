import { NgModule } from '@angular/core'
import { Router, Routes, RouterModule } from '@angular/router'

import { RecepieComponent } from './recepie/recepie.component'
import { ShoppingComponent } from './shopping/shopping.component'


const routes: Routes=[
{
    path: 'Recepies',
    component: RecepieComponent
},
{
    path: 'Shopping',
    component: ShoppingComponent
},
{
    path: '',
    redirectTo: '/Recepies',
    pathMatch: 'full'
}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class CustomRouting{}