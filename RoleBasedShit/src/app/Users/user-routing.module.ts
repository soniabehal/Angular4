import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LostComponent } from '../lost.component'
import { UsersComponent } from './user/users.compnent'
import { UserDashComponent } from './user-dash/userdash.component'
import { UserListComponent } from './user-list/userlist.component'


const Userroutes: Routes=[
   {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, 
    {
        path: 'home',
        component: UserDashComponent
    }, 
    {
        path: 'user',
        component: UsersComponent
    },
    {
        path: 'list',
        component: UserListComponent
    }
   
]

@NgModule({
imports: [RouterModule.forChild(Userroutes)],
exports: [RouterModule]
})
export class UserRoutingModule{}