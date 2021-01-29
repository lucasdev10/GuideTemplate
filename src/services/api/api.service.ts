import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl: string = '';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  endPoint: string;

  constructor(private _httpClient: HttpClient) {}

  get = (body: any): Observable<any> => {
    return this._httpClient.get<any>(`${apiUrl}/${this.endPoint}/`, body);
  };

  getById = (id: any): Observable<any> => {
    return this._httpClient.get<any>(`${apiUrl}/${this.endPoint}/${id}`, id);
  };

  getAll = (): Observable<any> => {
    return this._httpClient.get<any>(`${apiUrl}/${this.endPoint}/all`);
  };

  post = (body: any): Observable<any> => {
    return this._httpClient.post<any>(`${apiUrl}/${this.endPoint}`, body);
  };

  update = (body: any): Observable<any> => {
    return this._httpClient.put<any>(
      `${apiUrl}/${this.endPoint}/${body.id}`,
      body
    );
  };

  delete = (id: number): Observable<any> => {
    return this._httpClient.delete<any>(`${apiUrl}/${this.endPoint}/${id}`);
  };
}
