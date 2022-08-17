import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractApiConnectionHandler<T, V> {
  protected abstract apiUrl: string;

  constructor(protected http: HttpClient) {}

  getList(params: Partial<V> = {}): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}?${this.generateParams(params)}`);
  }

  getSingle(params: Partial<V> = {}): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}?${this.generateParams(params)}`);
  }

  postValue(value: T): Observable<any> {
    return this.http.post(`${this.apiUrl}`, value);
  }

  updateValue(value: T): Observable<any> {
    return this.http.put(`${this.apiUrl}`, value);
  }

  deleteValue(id: number | string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id.toString()}`);
  }

  protected generateParams(params: Partial<V>): string {
    let httpParams = new HttpParams();
    for (const key in params) {
      if (params[key as keyof V] !== undefined)
        httpParams = httpParams.append(key, String(params[key as keyof V]));
    }
    return httpParams.toString();
  }
}
