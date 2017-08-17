import { Component, OnInit, OnDestroy } from '@angular/core'

import { AmChartsService } from '@amcharts/amcharts3-angular'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  
  private chart: any;

  constructor(private AmCharts: AmChartsService){}

  ngOnInit(){
  
   
  }

  ngOnDestroy(){
    // this.AmCharts.destroyChart(this.chart);
  }

}
