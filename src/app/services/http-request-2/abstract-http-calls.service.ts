import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractHttpCallsService<T> {
  protected abstract apiUrl: string;
  constructor(protected http: HttpClient) {}

  getList(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}`);
  }

  getSingle(): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}`);
  }

  postData(body: T): Observable<any> {
    return this.http.post(`${this.apiUrl}`, body);
  }

  updateData(body: T): Observable<any> {
    return this.http.put(`${this.apiUrl}`, body);
  }

  deleteData(id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
