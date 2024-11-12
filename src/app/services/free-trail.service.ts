import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormData } from '../interfaces/form.data';

@Injectable({
  providedIn: 'root'
})
export class FreeTrailService {
  private apiUrl = 'https://6731ca207aaf2a9aff121696.mockapi.io/elevate/free-trail';
  constructor(private http: HttpClient) {}
  addItem(formData: FormData): Observable<any>{
  return this.http.post<any>(this.apiUrl, formData);
  }
}
