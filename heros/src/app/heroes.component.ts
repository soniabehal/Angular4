import { Component } from '@angular/core';
import {Hero} from './hero';
import{HeroService} from './hero.service';
@Component({
  selector: 'my-heroes',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HeroService]
})
export class HeroesComponent  {
  title = 'Tour of Heros';
  heroes:Hero[];
  selectedHero:Hero;

  constructor(private heroService:HeroService){
  
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
  }

  
  
  onSelect(hero:Hero):
  void{
    this.selectedHero=hero;
  }
}
