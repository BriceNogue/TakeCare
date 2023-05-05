import { Component } from '@angular/core';
import { Chart } from 'highcharts';
import { donutChartOPtions } from '../helpers/donutChartOptions';

@Component({
  selector: 'app-circular-chart',
  templateUrl: './circular-chart.component.html',
  styleUrls: ['./circular-chart.component.scss']
})
export class CircularChartComponent {
  donutChart = new Chart(donutChartOPtions);
}
