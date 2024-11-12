import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutritionistCourseService {
  private readonly jsonURL = 'assets/nutritionist-courses.json';

  constructor(private readonly http: HttpClient) {}

  getCourse(): Observable<any> {
    return this.http.get<any>(this.jsonURL);
  }
}
