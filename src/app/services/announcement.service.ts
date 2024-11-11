// announcement.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private readonly jsonURL = 'assets/announcements.json';

  constructor(private readonly http: HttpClient) {}

  getAnnouncements(): Observable<any> {
    return this.http.get<any>(this.jsonURL);
  }
}
