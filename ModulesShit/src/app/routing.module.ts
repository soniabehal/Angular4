import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { RecepiesComponent } from './Recepie/recepies.component'
import { AppComponent } from './app.component'
import { ShoppingComponent } from './Shopping/shopping.component';

import { AuthProvider } from './auth-provider.service'

const rootRoutes: Routes=[
    {
        path: 'rece',
        component: RecepiesComponent,
        canActivate: [AuthProvider],
        data: {'PermissionsLevel':'1'}
    }
]

@NgModule({
    imports:[RouterModule.forRoot(rootRoutes)],
    exports:[RouterModule]
})
export class RoutingModule{}