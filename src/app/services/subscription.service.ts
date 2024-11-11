import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private readonly apiUrl = 'http://localhost:3000/subscribe';

  constructor(private readonly http: HttpClient) {}

  subscribe(email: string): Observable<any> {
    return this.http.post(this.apiUrl, { email });
  }
}
