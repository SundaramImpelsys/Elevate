import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  private courseCount: number = 0;
  private workshopCount: number = 0;
  private trainerCount:number = 0;
  private coursesLoaded: boolean = false;
  private workshopsLoaded: boolean = false;
  private trainersLoaded: boolean = false;

  constructor(private http: HttpClient) {}

  incrementTrainerCount() {
    this.trainerCount++;
  }

  incrementCourseCount() {
    this.courseCount++;
  }

  incrementWorkshopCount() {
    this.workshopCount++;
  }

  getTrainerCount(): Observable<number>{
    if(!this.trainersLoaded){
      return this.loadTrainers();
    }else{
    return of(this.trainerCount);
  }
}

  getCourseCount(): Observable<number> {
    if (!this.coursesLoaded) {
      return this.loadCourses();  
    } else {
      return of(this.courseCount); 
    }
  }

  getWorkshopCount(): Observable<number> {
    if (!this.workshopsLoaded) {
      return this.loadWorkshops();  
    } else {
      return of(this.workshopCount);
    }
  }

  private loadCourses(): Observable<number> {
    const urls = [
      'assets/json/doctor-courses.json', 
      'assets/json/nurse-courses.json', 
      'assets/json/nutritionist-courses.json', 
      'assets/json/pharmacist-courses.json'
    ];

    const requests = urls.map(url => this.http.get<any[]>(url).pipe(
      catchError(error => {
        console.error(`Error loading courses from ${url}`, error);
        return []; // Return an empty array in case of error
      })
    ));

    return forkJoin(requests).pipe(
      map(results => {
        this.courseCount = results.reduce((sum, courses) => sum + courses.length, 0);
        this.coursesLoaded = true;
        return this.courseCount;  // Return the final count after all requests
      }),
      catchError(error => {
        console.error('Error in loading multiple course URLs', error);
        return of(0);  // Return 0 if there's an error
      })
    );
  }

  private loadWorkshops(): Observable<number> {
    const url = 'assets/json/announcements.json';

    return this.http.get<any[]>(url).pipe(
      map(workshops => {
        this.workshopCount = workshops.length;
        this.workshopsLoaded = true;
        return this.workshopCount;
      }),
      catchError(error => {
        console.error(`Error loading workshops from ${url}`, error);
        return of(0);
      })
    );
  }

  private loadTrainers(): Observable<number> { 
    const url = 'https://6731ca207aaf2a9aff121696.mockapi.io/elevate/user'; 
    return this.http.get<any[]>(url).pipe( map(users => { 
      this.trainerCount = users.filter(user => user.role === 'trainer').length; 
      return this.trainerCount; }), 
      catchError(error => { 
        console.error(`Error loading trainers from ${url}`, error); 
        return of(0); 
      }
    )); 
  }
}
