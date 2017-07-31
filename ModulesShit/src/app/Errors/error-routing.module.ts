import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { Error404Component } from './error404/error404.component'
import { Error500Component } from './error500/error500.component'
import { ErrorUnknownComponent } from './error-unknown/error-unknown.component'
import { UnauthAccessComponent } from './unauth-access/unauth-access.component'

const routes : Routes=[
    {
        path: 'Error404',
        component: Error404Component
    },
    {
        path: 'Error500',
        component: Error500Component
    },
    {
        path: 'ErrorUnknown',
        component: ErrorUnknownComponent
    },
      {
        path: 'IllegalAccess',
        component: UnauthAccessComponent
    },
    {
        path: '**',
        redirectTo: 'ErrorUnknown',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErrorsRoutingModule{}