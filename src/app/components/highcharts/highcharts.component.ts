import { Component, OnInit, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from 'src/app/services/data.service';
import { UserData } from 'src/app/interfaces/user.data';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/app/store/reducers/userVerification.reducers';
import { selectUser } from 'src/app/store/selectors/userVerification.selectors';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  user: UserData | null = null;
  allUsers: UserData[] = []; // Local storage for all users

  constructor(
    private readonly dataService: DataService,
    private store: Store<AuthState>,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.store.select(selectUser).subscribe(user => {
      this.user = user;
      this.fetchData();
    });
  }

  fetchData(): void {
    if (!this.user) {
      return;
    }

    this.dataService.getItems().subscribe((users: UserData[]) => {
      this.allUsers = users;
      this.processData();
    });
  }

  processData(): void {
    const trainerCourses = this.user?.createdCourses || [];

    const courseEnrollments: { [key: string]: number } = {};

    // Initialize courseEnrollments with zeroes
    trainerCourses.forEach(course => {
      courseEnrollments[course] = 0;
    });


    // Count enrollments for each course
    this.allUsers.forEach(user => {
      if (user.role === 'learner') {
        user.enrolledCourses.forEach(enrolledCourse => {
          if (courseEnrollments[enrolledCourse] !== undefined) {
            courseEnrollments[enrolledCourse]++;
          }
        });
      }
    });

    this.initializeChart(trainerCourses, trainerCourses.map(course => courseEnrollments[course]));
  }

  initializeChart(courseTitles: string[], counts: number[]): void {
    
    this.chartOptions = {
      chart: {
        type: 'column',
        renderTo: this.el.nativeElement.querySelector('#container')
      },
      title: {
        text: 'Course Enrollment Statistics'
      },
      xAxis: {
        categories: courseTitles,
        title: {
          text: 'Courses'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Number of Enrollments'
        }
      },
      legend: { 
        enabled: false
        },
      series: [
        {
          name: 'Enrollments',
          data: counts,
          type: 'column',
          color: '#ff7518'
        }
      ],
      plotOptions: {
        column: {
          colorByPoint: true,
          colors: ['#ff7518', '#194866']
        }
      }
    };

    Highcharts.chart(this.chartOptions);
  }
}
