import { Component, HostBinding, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Router } from '@angular/router'

import { PermissionsService } from './permissions.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
@ViewChild('PL') PLeleRed: ElementRef

  constructor(private PrmsnServ: PermissionsService){}

  ngOnInit(){
    this.verifyAccess();
  }

  verifyAccess(){
    if(!localStorage.getItem("UserRoleLevel")===undefined){
     try{
      console.log(this.PrmsnServ.isAccessible("happComp",parseInt(localStorage.getItem("UserRoleLevel")))==true?"allowed":"NOT allowed")
     }
    catch(e){
      console.log("Possibly tampered LocalStorage "+e.message)
    }
    }
  else 
      console.log("no local variable found")
  }

isLoggedIn:boolean  = false;
@Input() Permiss:any='0';
LoginClick(){
  localStorage.setItem('UserRoleLevel',this.PLeleRed.nativeElement.value);

  
this.isLoggedIn=true;
}

LogoutClick(){
  localStorage.removeItem('UserRoleLevel')
this.isLoggedIn=false;

}
}
