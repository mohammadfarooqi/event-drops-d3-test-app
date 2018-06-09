import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3v4';
import eventDrops from 'event-drops';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const chart = eventDrops({
      d3,
      drop: {
        date: d => d.date
      }
    });

    const repositoriesData = [
      {
        name: 'admin-on-rest',
        data: [{ date: new Date('2018/01/15 14:21:31') } ],
      },
      {
        name: 'event-drops',
        data: [{ date: new Date('2018/01/15 13:24:57') } ],
      },
      {
        name: 'sedy',
        data: [{ date: new Date('2018/01/15 13:25:12') } ],
      },
    ];

    d3
      .select('#eventdrops-demo')
      .data([repositoriesData])
      .call(chart);
  }

}
