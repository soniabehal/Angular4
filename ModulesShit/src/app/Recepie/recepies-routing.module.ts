import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { RecepiesComponent } from './recepies.component'
import { RecepieListComponent } from './recepie-list/recepie-list.component'


const routes: Routes=[
{
    path: '',
    redirectTo: '/recepies',
    pathMatch: 'full'
},
{
    path: 'recepies',
    component: RecepiesComponent
},
{
    path: 'list',
    component: RecepieListComponent
}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecepiesRoutingModule{}