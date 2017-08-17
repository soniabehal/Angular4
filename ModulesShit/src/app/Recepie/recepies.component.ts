import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { PermissionsService } from '../permissions.service'

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {

  constructor(private PrmsnServ: PermissionsService, private router: Router, private ActiveURL: ActivatedRoute) {}

  ngOnInit() {
   if(this.PrmsnServ.isAccessible("RecepiesComp",parseInt(localStorage.getItem("UserRoleLevel"))))
     console.log("welcome to recepies component, authenticated user")
    else
     this.router.navigate(['IllegalAccess'])


//TODO: Subscribe to Localstorage to detect change/forgery in permissionlevel
  }
}
