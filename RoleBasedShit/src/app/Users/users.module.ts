import { NgModule } from '@angular/core'
import { UserRoutingModule } from './user-routing.module'

import { UsersComponent } from './user/users.compnent'
import { UserDashComponent } from './user-dash/userdash.component'
import { UserListComponent} from './user-list/userlist.component'

@NgModule({
    imports:[UserRoutingModule],
    exports:[],
    declarations: [UsersComponent, UserDashComponent,UserListComponent]
})
export class UsersModule{}