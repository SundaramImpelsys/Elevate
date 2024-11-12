import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorCourseService {
  private readonly jsonURL = 'assets/doctor-courses.json';

  constructor(private readonly http: HttpClient) {}

  getCourse(): Observable<any> {
    return this.http.get<any>(this.jsonURL);
  }
}
