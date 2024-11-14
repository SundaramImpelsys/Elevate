import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NurseCourseService {
  private readonly jsonURL = 'assets/json/nurse-courses.json';

  constructor(private readonly http: HttpClient) {}

  getCourse(): Observable<any> {
    return this.http.get<any>(this.jsonURL);
  }
}
