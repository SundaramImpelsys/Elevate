import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrustedCompaniesService {
  private readonly jsonURL = 'assets/json/trusted-companies.json';

  constructor(private readonly http: HttpClient) {}

  getTrustedCompanies(): Observable<any> {
    return this.http.get<any>(this.jsonURL);
  }
}
