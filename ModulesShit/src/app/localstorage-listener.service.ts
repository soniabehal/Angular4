import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Injectable } from '@angular/core'

@Injectable()
export class ListenerService{

    public Tokenu = BehaviorSubject<string>('some value')

    constructor(){
        console.log('in const')
    }
}