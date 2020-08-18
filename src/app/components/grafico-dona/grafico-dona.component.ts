import { Component, OnInit, Input } from '@angular/core';

import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {

  @Input('chartLabels') public doughnutChartLabels: Label[] = [];
  @Input('chartData') public doughnutChartData: MultiDataSet = [];
  @Input('chartType') public doughnutChartType: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
