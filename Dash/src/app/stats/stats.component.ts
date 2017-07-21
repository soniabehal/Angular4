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
    // this.getCustomersCount();
  }     

}