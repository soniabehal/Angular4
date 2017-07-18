import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './meta';
@Injectable()
export class HeroService{
    getHeroes():Promise<Hero[]>{ //promise for synchronous access
      return Promise.resolve(HEROES);
    }
  }
