import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-admin-pie-chart',
  templateUrl: './admin-pie-chart.component.html',
  styleUrls: ['./admin-pie-chart.component.css']
})
export class AdminPieChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  @Input() totalTrainers: number = 0;
  @Input() totalCourses: number = 0;
  @Input() totalWorkshops: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.initializeChart();
  }

  initializeChart(): void {
    this.chartOptions = {
      chart: {
        type: 'pie',
        renderTo: this.el.nativeElement.querySelector('#pieChartContainer')
      },
      title: {
        text: 'Admin Dashboard Statistics'
      },
      series: [
        {
          name: 'Counts',
          type: 'pie',
          data: [
            { name: 'Trainers', y: this.totalTrainers },
            { name: 'Courses', y: this.totalCourses },
            { name: 'Workshops', y: this.totalWorkshops }
          ],
          colors: ['#ff7518', '#ff8c1a', '#ffa500'] // Shades of orange
        }
      ],
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          },
          showInLegend: true
        }
      }
    };

    Highcharts.chart(this.chartOptions);
  }
}
