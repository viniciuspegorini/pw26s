import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) { }

  private getUrl(): string {
    return environment.api + '/produto';
  }

  findAll(): Observable<Produto[]> {
    const url = `${this.getUrl()}`;
    return this.httpClient.get<Produto[]>(url);
  }

  save(produto: Produto): Observable<void> {
    const url = `${this.getUrl()}`;
    return this.httpClient.post<void>
            (url, JSON.stringify(produto), httpOptions);
  }

  findOne(id: number): Observable<Produto> {
    const url = `${this.getUrl()}/${id}`;
    return this.httpClient.get<Produto>(url);
  }

  delete(id: number): Observable<void> {
    const url = `${this.getUrl()}/${id}`;
    return this.httpClient.delete<void>(url);
  }
}