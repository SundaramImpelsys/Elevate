import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PharmacistCourseService {
  private readonly jsonURL = 'assets/json/pharmacist-courses.json';
  private readonly apiURL = 'http://localhost:3000/addCourse';
  private readonly deleteURL = 'http://localhost:3000/deleteCourse';

  constructor(private readonly http: HttpClient) {}

  getCourse(): Observable<any> {
    return this.http.get<any>(this.jsonURL);
  }

  putCourse(course: any): Observable<any> {
    return this.http.put<any>(this.apiURL, course);
  }

  addCourse(course: any): Observable<any> { 
    return this.http.post<any>(this.apiURL, course); 
  }

  deleteCourses(removeCourses: string[], profession: string): Observable<any> {
    return this.http.delete<any>(this.deleteURL, { body: { removeCourses, profession } });
  }
}