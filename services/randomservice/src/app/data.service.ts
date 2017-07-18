import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  data=[
    '11401807','112345','54671578217','53821379239'
  ];
  myData(){
    return 'Yo data is transferred';
  }
}
