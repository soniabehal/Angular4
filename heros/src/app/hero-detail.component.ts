import {Component,Input} from '@angular/core';
import {Hero} from './hero';
@Component({
  selector:'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div id="details"><label>id: </label>{{hero.id}}</div>
      <div id="d1">
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `,
  styleUrls:['./app.component.css']
})
export class HeroDetailComponent{
  @Input() hero:Hero;
}
