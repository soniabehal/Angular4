import { NgModule } from '@angular/core'

import { ErrorsRoutingModule } from './error-routing.module'

import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { ErrorUnknownComponent } from './error-unknown/error-unknown.component';
import { UnauthAccessComponent } from './unauth-access/unauth-access.component'

@NgModule({
    imports:[ErrorsRoutingModule],
    exports:[],
    declarations: [ Error404Component, Error500Component, ErrorUnknownComponent, UnauthAccessComponent]
})
export class ErrorsModule{}