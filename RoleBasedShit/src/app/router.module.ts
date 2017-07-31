import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component'
import { LostComponent } from './lost.component';

import { UserDashComponent } from './Users/user-dash/userdash.component'
import { AdminDashComponent } from './Admins/admin-dash/admindash.component'

const routes: Routes = [
    {
        path: 'home',
        component: AppComponent
    },
    {
        path: 'users',
        component: UserDashComponent
    },
    {
        path: 'admins',
        component: AdminDashComponent
    },
    {
        path: '**',
        component: LostComponent
    }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class RoutingModule {}