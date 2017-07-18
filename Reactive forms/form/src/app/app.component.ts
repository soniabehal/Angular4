import { Component } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rForm:FormGroup;
  post:any;
  description:string=" ";
  name:string='';
  titleAlert='This filed is required ';
  constructor(private fb:FormBuilder){
    this.rForm=fb.group({
      'name':[null,Validators.required],
      'description':[null,Validators.compose([Validators.required,Validators.minLength(30),Validators.maxLength(500)])],
      'validate':''
    });
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.rForm.get('validate').valueChanges.subscribe(
      (validate)=>{
        if(validate=='1'){
          this.rForm.get('name').setValidators([Validators.required,Validators.minLength(3)]);
          this.titleAlert="3 characters require";
        }
        else{
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
      }
      
    )

  }
    addPost(post){
      this.name=post.name;
      this.description=post.description;
    }
 
}
