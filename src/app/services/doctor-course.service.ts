import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorCourseService {
  private readonly jsonURL = 'assets/json/doctor-courses.json';
  private readonly apiURL = 'http://localhost:3000/addCourse';

  constructor(private readonly http: HttpClient) {}

  getCourse(): Observable<any> {
    return this.http.get<any>(this.jsonURL);
  }

  addCourse(course: any): Observable<any> { 
    return this.http.post<any>(this.apiURL, course); 
  }
}
