import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Genero } from './genero';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private httpClient: HttpClient) { }

  private getUrl(): string {
    return environment.api + '/genero';
  }

  findAll(): Observable<Genero[]> {
    const url = `${this.getUrl()}`;
    return this.httpClient.get<Genero[]>(url);
  }

  save(genero: Genero): Observable<void> {
    const url = `${this.getUrl()}`;
    return this.httpClient.post<void>
            (url, JSON.stringify(genero), httpOptions);
  }

  findOne(id: number): Observable<Genero> {
    const url = `${this.getUrl()}/${id}`;
    return this.httpClient.get<Genero>(url);
  }

  delete(id: number): Observable<void> {
    const url = `${this.getUrl()}/${id}`;
    return this.httpClient.delete<void>(url);
  }
}
