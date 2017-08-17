import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { WebService } from '../WebService'

import 'rxjs/add/operator/toPromise';//enables conversion from observable to promise

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  private url_CustCount = this.webservice.WebServiceURL;

  private headerS  = new Headers({'content-type':'application/json'});

  //Stats here
  hitsCount = null;

  obj = '{"size": 0,"query":{"bool":{"must":[{"match":{"status":200}}]}}}';

  constructor(private http: Http,
  private webservice: WebService) { }

  ngOnInit() {
<<<<<<< HEAD
console.log(this.hitsCount);

console.log(this.hitsCount);
   
  }

/*********
 * LEFTERS:
 * make the functions and return only integer values of NULL
 * 
 */

  getHitsCount() {
    /*
      returns the total hits count
      returns -1 on error in making HTTP request
    */
 
    var responsePromise =  this.http.post(this.url_CustCount, '{"size": 0,"query":{"bool":{"must":[{"match":{"status":200}}]}}}', {headers: this.headerS})
    .toPromise()
    .then(response=> {
    return response.json().hits.total;
    }
  )
  .catch(error=>
    {
      this.LogError(error);
      return -1;
    }
    );
  
  }

LogError(error: any): void{
  console.log("Some error occured.",error);
}
}
=======
    // this.getCustomersCount();
  }     

}
>>>>>>> c7c6dceb8c87c3faf9975c56ef268e470e167256
