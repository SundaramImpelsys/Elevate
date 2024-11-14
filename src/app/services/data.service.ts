import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../interfaces/user.data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly apiUrl = 'https://6731ca207aaf2a9aff121696.mockapi.io/elevate/user';
  constructor(private readonly http: HttpClient) {}

  addItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  getItems(): Observable<UserData[]> { 
    return this.http.get<UserData[]>(this.apiUrl); 
  }

  putItem(id: string, item: UserData): Observable<UserData> { 
    return this.http.put<UserData>(`${this.apiUrl}/${id}`, item); 
  }

  deleteItem(id: string): Observable<any> { 
    return this.http.delete<any>(`${this.apiUrl}/${id}`); 
  }
}
