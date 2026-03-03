import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  private httpClient = inject(HttpClient);
  private apiService = inject(ApiService);

  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    const url = this.apiService.buildUrl(endpoint);
    return this.httpClient.get<T>(url, { params });
  }

  post<T>(endpoint: string, body: unknown): Observable<T> {
    const url = this.apiService.buildUrl(endpoint);
    return this.httpClient.post<T>(url, body);
  }

  put<T>(endpoint: string, body: unknown): Observable<T> {
    const url = this.apiService.buildUrl(endpoint);
    return this.httpClient.put<T>(url, body);
  }

  delete<T>(endpoint: string): Observable<T> {
    const url = this.apiService.buildUrl(endpoint);
    return this.httpClient.delete<T>(url);
  }
}