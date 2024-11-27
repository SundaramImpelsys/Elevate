import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribedMailService {
  private readonly jsonURL = 'assets/json/subscribedMail.json';

  constructor(private readonly http: HttpClient) { }

  getSubscribedMails(): Observable<any> {
    return this.http.get<any>(this.jsonURL);
  }

}
