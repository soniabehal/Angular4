import { Component, OnInit, ViewChild,  ElementRef } from '@angular/core';
import Chart from 'chart.js'

@Component({
  selector: 'charter',
  templateUrl: './charter.component.html',
  styleUrls: ['./charter.component.css']
})

export class CharterComponent implements OnInit {
  @ViewChild('donut') donut: ElementRef;
  @ViewChild('barism') bar: ElementRef;

    constructor(
    ) { }

    ngOnInit() {
        let donutCtx = this.donut.nativeElement.getContext('2d');
        let barCtx = this.bar.nativeElement.getContext('2d');

        var data = {
            labels: [
                "Value A",
                "Value B",
                 "Value C"
            ],
            datasets: [
                {
                    "data": [31342, 45342, 22222],  
                    "backgroundColor": [
                        "#1fc8f8",
                        "#76a346",
                        "#dbdbdb"
                    ]
                }]
        };

        var chart = new Chart(
            donutCtx,
            {
                "type": 'doughnut',
                "data": data,
                "options": {
                    "onclick": "pieclicker",
                    "responsive": true,
                    "cutoutPercentage": 50,
                    "animation": {
                        "animateScale": true,
                        "animateRotate": false
                    }
                }
            }
        );

        var barChart = new Chart(
        barCtx,
        {
            "type": "bar",
            "data": data,
            "options": {
                "responsive": true,
               
                "animation": {
                    "animateRotate": true,
                    "animateScale": true
                },
                "hover": {
                    "mode": "dataset"

                },
                "intersect": true
            }
        }
        )

        this.donut.nativeElement.onclick = function(evnt){
            console.log(barChart.getElementsAtEvent(evnt))
        }
    }
}
