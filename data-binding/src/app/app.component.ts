import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  string="hii i m string";
  
  son={
    name:"wisdom",
    age:"19",
  };

  yell(e){
    alert("Inside yell function");
  }
}
