import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  private url_CustCount = 'http://nfsrv-elk-prod-1100.zreem.com:9200/_search';
  private headerS  = new Headers({'content-type':'application/json'});

  //Stats here
  hitsCount = null;

  obj = '{"size": 0,"query":{"bool":{"must":[{"match":{"status":200}}]}}}';

  constructor(private http: Http) { }

  ngOnInit() {
     this.getCustomersCount();
  }


onTrigger(){
  this.getCustomersCount();
}

  getCustomersCount(): Promise<any>{

    return this.http.post(this.url_CustCount, '{"size": 0,"query":{"bool":{"must":[{"match":{"status":200}}]}}}', {headers: this.headerS})
    .toPromise()

    .then(response=> {
      var data = response.json();
      console.log(response.json(),data.hits.total);
    this.hitsCount  = data.hits.total;
    }).catch(this.errorHandle);

  }
errorHandle(error: any): Promise<any>{
  console.log("error",error);
  return Promise.reject(error.message|| error);
}
}
