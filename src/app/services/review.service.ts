import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private readonly jsonURL = 'assets/json/reviews.json';

  constructor(private readonly http: HttpClient) {}

  getReview(): Observable<any> {
    return this.http.get<any>(this.jsonURL);
  }
}
